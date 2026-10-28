import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import AppRoutes from "../common/AppRoutes";
import TestHome from "./TestHome";

function CurrentPath() {
  return <span data-testid="current-path">{useLocation().pathname}</span>;
}

test.each(["/", "/test"])("new portfolio is served at %s through the root route", (path) => {
  render(<MemoryRouter initialEntries={[path]}><AppRoutes /><CurrentPath /></MemoryRouter>);

  expect(screen.getByTestId("current-path")).toHaveTextContent(/^\/$/);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Simona.");
});

test("opening and closing project details keeps the card visible", () => {
  const originalObserver = window.IntersectionObserver;
  window.IntersectionObserver = class {
    constructor(callback) { this.callback = callback; }
    observe(element) {
      if (element.dataset.projectId === "1") {
        this.callback([{ isIntersecting: true, target: element }]);
      }
    }
    unobserve() {}
    disconnect() {}
  };

  try {
    render(<TestHome />);

    expect(screen.getByText("open to talk")).toBeInTheDocument();
    expect(screen.getByText("design + development")).toBeInTheDocument();
    expect(screen.getByText(/Skopje, MK/)).toBeInTheDocument();
    expect(document.querySelector("time").textContent).toMatch(/^\d{2}:\d{2}$/);

    const preview = screen.getAllByRole("button", { name: "Show details for eplatforma.mk" })[0];
    const card = preview.closest("article");

    expect(card).toHaveClass("is-visible");
    fireEvent.click(preview);
    expect(card).toHaveClass("is-visible");
    expect(screen.getByText(/Course access, learning materials/)).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole("button", { name: "Hide details for eplatforma.mk" })[0]);
    expect(card).toHaveClass("is-visible");
  } finally {
    window.IntersectionObserver = originalObserver;
  }
});

test("navigation shortcut takes visitors to the work section", () => {
  render(<TestHome />);
  const workSection = document.getElementById("work");
  workSection.scrollIntoView = jest.fn();

  fireEvent.keyDown(window, { key: "w" });

  expect(workSection.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
});

test("contact and social shortcuts follow their links outside text fields", () => {
  render(<TestHome />);
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView = jest.fn();
  const open = jest.spyOn(window, "open").mockImplementation(() => null);

  try {
    expect(screen.getByRole("link", { name: /Contact/ })).toHaveAttribute("aria-keyshortcuts", "C");
    fireEvent.keyDown(window, { key: "c" });
    expect(contactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    [
      ["l", "LinkedIn", "https://www.linkedin.com/in/simonaxanchova/"],
      ["g", "GitHub", "https://github.com/simonaxanchova"],
      ["b", "Behance", "https://www.behance.net/simonaxanchova"],
    ].forEach(([key, name, url]) => {
      expect(screen.getByRole("link", { name: new RegExp(name) })).toHaveAttribute("aria-keyshortcuts", key.toUpperCase());
      fireEvent.keyDown(window, { key });
      expect(open).toHaveBeenLastCalledWith(url, "_blank", "noopener,noreferrer");
    });

    const input = document.createElement("input");
    document.body.appendChild(input);
    fireEvent.keyDown(input, { key: "g" });
    expect(open).toHaveBeenCalledTimes(3);
    input.remove();
  } finally {
    open.mockRestore();
  }
});

test("project links open the supplied live sites", () => {
  render(<TestHome />);

  expect(screen.getByRole("link", { name: /Visit eplatforma.mk \(opens/ })).toHaveAttribute("href", "https://www.eplatforma.mk");
  expect(screen.getByRole("link", { name: /Visit Portal for E-Services \(opens/ })).toHaveAttribute("href", "https://e-uslugi.katastar.gov.mk");
  expect(screen.getByRole("link", { name: /Visit Aucta Development Website \(opens/ })).toHaveAttribute("href", "https://aucta.dev");
});

test("folder filters narrow the work and can be cleared", () => {
  render(<TestHome />);

  fireEvent.click(screen.getByRole("button", { name: /Active 01/ }));
  expect(screen.getByRole("heading", { name: "eplatforma.mk" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Aucta Development Website" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Frontend 01/ }));
  expect(screen.getByText("No projects match those folders.")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Show all work ↗" }));
  expect(screen.getByRole("heading", { name: "Aucta Development Website" })).toBeInTheDocument();
});

