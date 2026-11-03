import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, test } from "vitest";
import App from "../src/App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
});

function renderAt(path) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

test("homepage states the workshop headline", () => {
  renderAt("/");
  expect(screen.getByRole("heading", { level: 1, name: /Run Your Rod Shop/i })).toBeInTheDocument();
  const starts = screen.getAllByRole("link", { name: "Start Free Bench" });
  expect(starts.length).toBeGreaterThan(0);
  expect(starts[0]).toHaveAttribute("href", expect.stringContaining("#view=profile"));
});

test("pricing does not invent a popular badge or an annual pro price", async () => {
  renderAt("/pricing");
  expect(screen.queryByText(/most popular/i)).not.toBeInTheDocument();
  expect(screen.getByText("Recommended for independent builders")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Annual" }));
  expect(screen.getAllByText("Pricing pending").length).toBeGreaterThan(0);
  expect(screen.getByText("$79/year")).toBeInTheDocument();
});

test("pro checkout does not claim a payment succeeded", async () => {
  renderAt("/pricing");
  await userEvent.click(screen.getByRole("button", { name: "Upgrade to Pro" }));
  expect(screen.getByRole("dialog")).toHaveTextContent(/No payment started/i);
  expect(screen.getByRole("dialog")).toHaveTextContent(/Nothing was charged/i);
});

test("demo keeps sample data local", async () => {
  renderAt("/workbench-demo");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/sample/i);
  await userEvent.click(screen.getByRole("button", { name: /Update the stage/i }));
  await userEvent.selectOptions(screen.getByLabelText(/Update illustrative stage/i), "3");
  expect(screen.getByText(/browser preview only/i)).toBeInTheDocument();
});

test("contact form does not pretend delivery without an endpoint", async () => {
  renderAt("/contact");
  await userEvent.type(screen.getByLabelText("Name"), "Ada Builder");
  await userEvent.type(screen.getByLabelText("Email"), "ada@example.com");
  await userEvent.type(screen.getByLabelText("Message"), "I need a clearer cure note on the bench.");
  await userEvent.click(screen.getByRole("button", { name: "Submit" }));
  expect(screen.getByRole("status")).toHaveTextContent(/was not delivered/i);
});
