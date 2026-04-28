import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";
import {
  FiChevronLeft,
  FiMaximize2,
  FiMinus,
  FiMoreHorizontal,
  FiSearch,
  FiX,
} from "react-icons/fi";
import { FiMoon, FiSun } from "react-icons/fi";
import { items, projects } from "./data";

const colors = [
  "rgba(0, 140, 255, 1)",
  "rgba(70, 168, 255, 1)",
  "rgba(132, 197, 255, 1)",
  "rgba(184, 220, 255, 1)",
  "rgba(222, 239, 255, 1)",
  "rgba(243, 249, 255, 1)",
];

export default function Homev2() {
  const sectionInk = "#16213e";
  const sectionInkSoft = "rgba(22, 33, 62, 0.62)";
  const sectionInkMuted = "rgba(22, 33, 62, 0.48)";
  const sectionBody = "rgba(22, 33, 62, 0.78)";
  const sectionLine = "rgba(22, 33, 62, 0.14)";
  const sectionLineStrong = "rgba(22, 33, 62, 0.22)";
  const sectionSurface = "rgba(243, 247, 255, 0.78)";
  const sectionSurfaceHover = "rgba(248, 251, 255, 0.96)";
  const sectionPanel = "rgba(233, 240, 252, 0.62)";
  const navItems = ["works", "about", "contact"];
  const heroSignals = ["Thoughtful UI", "Built by Simona", "Detail-driven"];
  const heroDetails = [
    {
      label: "Focus",
      value:
        "Full-stack development with an emphasis on backend systems, API design, and scalable web applications",
    },
    {
      label: "Based in",
      value: "Skopje, working across products, brands, and digital teams",
    },
    {
      label: "Approach",
      value: "Clean structure, tactile interfaces, and careful visual pacing",
    },
    {
      label: "Available for",
      value: "Portfolio sites, product surfaces, and thoughtful redesigns",
    },
  ];
  const focusAreas = [
    {
      id: "01",
      title: "Product websites",
      eyebrow: "Brand surfaces",
      text: "Landing pages and marketing surfaces with clear hierarchy, strong pacing, and detail that supports the brand instead of distracting from it.",
      meta: ["Structure", "Motion", "Responsive"],
      accent: "#2563eb",
      accentSoft: "rgba(37, 99, 235, 0.14)",
      stat: "Fast first impression",
    },
    {
      id: "02",
      title: "Interface design",
      eyebrow: "Product feel",
      text: "UI systems shaped around clarity and feel, from content flow and typography to states, spacing, and interaction rhythm.",
      meta: ["UI systems", "Typography", "Interaction"],
      accent: "#e4572e",
      accentSoft: "rgba(228, 87, 46, 0.14)",
      stat: "Calm, usable flows",
    },
    {
      id: "03",
      title: "Backend engineering",
      eyebrow: "System depth",
      text: "Services and application logic designed for scale, with attention to API quality, maintainability, and dependable performance.",
      meta: ["APIs", "Architecture", "Scalability"],
      accent: "#0f766e",
      accentSoft: "rgba(15, 118, 110, 0.14)",
      stat: "Reliable under load",
    },
  ];
  const aboutPrinciples = [
    {
      title: "Systems that stay clear",
      text: "I prefer architecture that remains understandable after the first sprint: explicit boundaries, dependable APIs, and code paths that are easy to extend.",
    },
    {
      title: "Design awareness in engineering",
      text: "Even when the work is backend-heavy, I care about the interface it creates for users, teams, and the product around it.",
    },
    {
      title: "Built for real use",
      text: "Performance, maintainability, and production behavior matter more than novelty. The work should hold up once traffic, change, and handoff start happening.",
    },
  ];
  const aboutStats = [
    { label: "Experience", value: "4+ years" },
    { label: "Primary focus", value: "Backend systems" },
    { label: "Based in", value: "Skopje" },
    { label: "Working with", value: "Products and teams" },
  ];
  const defaultConsoleHistory = [
    { type: "system", text: "simona-terminal v1.0" },
    { type: "system", text: "Type `help` to see available commands." },
  ];
  const highlightedCommands = [
    "help",
    "about",
    "work",
    "contact",
    "linkedin",
    "github",
    "clear",
    "exit",
  ];
  const consoleInputRef = useRef(null);
  const consoleHistoryRef = useRef(null);
  const worksSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsListRef = useRef(null);
  const [pixelTick, setPixelTick] = useState(0);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [isHeaderOnDark, setIsHeaderOnDark] = useState(false);
  const [consoleTheme, setConsoleTheme] = useState("dark");
  const [consoleInput, setConsoleInput] = useState("");
  const [consoleHistory, setConsoleHistory] = useState(defaultConsoleHistory);
  const [selectedProjectStatus, setSelectedProjectStatus] = useState("all");
  const [selectedProjectScope, setSelectedProjectScope] = useState("all");
  const [filterHighlightIndex, setFilterHighlightIndex] = useState(0);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [worksPointer, setWorksPointer] = useState({
    x: 62,
    y: 24,
    active: false,
  });
  const filterHighlightColors = ["#008cff", "#ef233c", "#0f9d58", "#f4b400"];
  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const circlePixels = useMemo(() => {
    const dots = [];
    const radius = 9;
    const feather = 1.8;
    const step = 0.9;

    for (let y = -radius; y <= radius; y += step) {
      for (let x = -radius; x <= radius; x += step) {
        const distance = Math.sqrt(x * x + y * y);
        if (distance <= radius) {
          const edgeFade = Math.min(
            1,
            Math.max(0, (radius - distance) / feather)
          );
          const softness = 0.35 + edgeFade * 0.65;
          dots.push({
            x,
            y,
            id: `${x.toFixed(2)}-${y.toFixed(2)}`,
            softness,
            size: 0.9 + edgeFade * 0.04,
          });
        }
      }
    }

    return dots;
  }, []);
  const formatSkopjeTime = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Skopje",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  const [currentTime, setCurrentTime] = useState(formatSkopjeTime());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatSkopjeTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPixelTick((current) => current + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFilterHighlightIndex(
        (current) => (current + 1) % filterHighlightColors.length
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [filterHighlightColors.length]);

  useEffect(() => {
    if (expandedProjectId === null) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!projectsListRef.current?.contains(event.target)) {
        setExpandedProjectId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [expandedProjectId]);

  useEffect(() => {
    if (!isConsoleOpen) {
      return undefined;
    }

    consoleInputRef.current?.focus();
    return undefined;
  }, [isConsoleOpen]);

  useEffect(() => {
    if (!isConsoleOpen) {
      return undefined;
    }

    const historyEl = consoleHistoryRef.current;

    if (historyEl) {
      historyEl.scrollTop = historyEl.scrollHeight;
    }

    return undefined;
  }, [consoleHistory, isConsoleOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const targetTag = event.target?.tagName?.toLowerCase();
      const isTypingField =
        targetTag === "input" ||
        targetTag === "textarea" ||
        event.target?.isContentEditable;

      if (isConsoleOpen) {
        if (key === "escape") {
          setIsConsoleOpen(false);
          setConsoleInput("");
          setConsoleHistory(defaultConsoleHistory);
        }
        return;
      }

      if (isTypingField || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (key === "c") {
        event.preventDefault();
        setIsConsoleOpen(true);
      }

      if (key === "l") {
        event.preventDefault();
        openExternal("https://www.linkedin.com/in/simonaxanchova/");
      }

      if (key === "g") {
        event.preventDefault();
        openExternal("https://github.com/simonaxanchova");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isConsoleOpen]);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const worksRect = worksSectionRef.current?.getBoundingClientRect();
      const aboutRect = aboutSectionRef.current?.getBoundingClientRect();

      if (!headerRect) {
        return;
      }

      const sampleY = headerRect.bottom - 1;
      const overlapsHeader = (rect) =>
        Boolean(rect && rect.top <= sampleY && rect.bottom >= sampleY);

      setIsHeaderOnDark(overlapsHeader(worksRect) || overlapsHeader(aboutRect));
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  const [hours, minutes] = currentTime.split(":");
  const headerPrimary = isHeaderOnDark ? "#ffffff" : "#171718";
  const headerSecondary = isHeaderOnDark
    ? "rgba(255, 255, 255, 0.72)"
    : "rgba(23, 23, 24, 0.7)";
  const headerDivider = isHeaderOnDark
    ? "rgba(255, 255, 255, 0.28)"
    : "rgba(23, 23, 24, 0.28)";
  const headerBorder = isHeaderOnDark
    ? "1px solid rgba(255, 255, 255, 0.12)"
    : "1px solid rgba(23, 23, 24, 0.08)";
  const headerHoverBorder = isHeaderOnDark
    ? "rgba(255, 255, 255, 0.85)"
    : "rgba(23, 23, 24, 0.85)";
  const shortcutActions = [
    {
      label: "[C] Console",
      onClick: () => setIsConsoleOpen(true),
    },
    {
      label: "[L] Linkedin",
      onClick: () =>
        openExternal("https://www.linkedin.com/in/simonaxanchova/"),
    },
    {
      label: "[G] Github",
      onClick: () => openExternal("https://github.com/simonaxanchova"),
    },
  ];
  const projectsWithMeta = useMemo(
    () =>
      projects.map((project) => {
        const metaById = {
          1: {
            status: "active",
            scope: "full-project",
            topic: "Education",
            detail:
              "A learning platform built around clearer course access, communication, and day-to-day student-teacher interaction. The work covers both the interface layer and the broader application structure, with an emphasis on reliability, readability, and a calmer product flow.",
          },
          2: {
            status: "shipped",
            scope: "full-project",
            topic: "Government",
            detail:
              "A digital public-services portal for submitting requests and moving through administrative workflows more efficiently. My contribution covered the full product surface, balancing service clarity, frontend behavior, and the engineering needed to support complex flows for real users.",
          },
          3: {
            status: "shipped",
            scope: "frontend",
            topic: "Brand",
            detail:
              "A company website focused on presenting Aucta with more structure and confidence. The main work here was frontend: implementing responsive layouts, refining visual pacing, and building a cleaner, more polished browsing experience.",
          },
          4: {
            status: "shipped",
            scope: "full-project",
            topic: "Booking",
            detail:
              "A ferry booking system designed to make reservation steps, schedules, and transaction details easier to follow. The project involved broader product thinking as well as implementation work across the booking journey and supporting screens.",
          },
        };

        return {
          ...project,
          ...(metaById[project.id] || {
            status: "shipped",
            scope: "full-project",
          }),
        };
      }),
    []
  );
  const visibleProjects = projectsWithMeta.filter((project) => {
    const statusMatches =
      selectedProjectStatus === "all" ||
      project.status === selectedProjectStatus;
    const scopeMatches =
      selectedProjectScope === "all" || project.scope === selectedProjectScope;

    return statusMatches && scopeMatches;
  });
  const statusOptions = [
    { value: "all", label: "all", description: "show everything" },
    { value: "active", label: "active", description: "current work" },
    { value: "shipped", label: "shipped", description: "completed work" },
  ];
  const scopeOptions = [
    { value: "all", label: "all", description: "any contribution" },
    {
      value: "full-project",
      label: "full project",
      description: "end-to-end ownership",
    },
    { value: "frontend", label: "frontend", description: "UI-focused work" },
    { value: "backend", label: "backend", description: "system-focused work" },
  ];
  const activeFilterHighlightColor =
    filterHighlightColors[filterHighlightIndex];
  const handleWorksPointerMove = (event) => {
    const bounds = worksSectionRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setWorksPointer({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      active: true,
    });
  };
  const consoleThemeStyles =
    consoleTheme === "light"
      ? {
          shellBorder: "1px solid rgba(23, 23, 24, 0.12)",
          shellBackground:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 247, 251, 0.98))",
          shellShadow: "0 32px 80px rgba(23, 23, 24, 0.14)",
          headerBorder: "1px solid rgba(23, 23, 24, 0.08)",
          titleColor: "rgba(23, 23, 24, 0.72)",
          metaColor: "rgba(23, 23, 24, 0.42)",
          systemColor: "rgba(0, 120, 210, 0.92)",
          commandColor: "#171718",
          responseColor: "rgba(23, 23, 24, 0.72)",
          highlightColor: "#008cff",
          secondaryHighlightColor: "#ef233c",
          accentHighlightColor: "#0f9d58",
          promptUserBg: "#00a878",
          promptUserColor: "#ffffff",
          promptPathBg: "#008cff",
          promptPathColor: "#ffffff",
          promptSymbolColor: "#ff6b6b",
          inputBg: "rgba(23, 23, 24, 0.04)",
          historyStripe: "rgba(23, 23, 24, 0.05)",
          inputColor: "#171718",
          inputPlaceholder: "rgba(23, 23, 24, 0.28)",
          promptColor: "#008cff",
          toggleBackground: "rgba(23, 23, 24, 0.06)",
          toggleBorder: "1px solid rgba(23, 23, 24, 0.08)",
          toggleColor: "#171718",
        }
      : {
          shellBorder: "1px solid rgba(255, 255, 255, 0.12)",
          shellBackground:
            "linear-gradient(180deg, rgba(15, 16, 23, 0.95), rgba(10, 11, 17, 0.98))",
          shellShadow: "0 32px 80px rgba(0, 0, 0, 0.35)",
          headerBorder: "1px solid rgba(255, 255, 255, 0.08)",
          titleColor: "rgba(255, 255, 255, 0.72)",
          metaColor: "rgba(255, 255, 255, 0.42)",
          systemColor: "rgba(0, 200, 255, 0.88)",
          commandColor: "#f8f5f1",
          responseColor: "rgba(255, 255, 255, 0.72)",
          highlightColor: "#5ec8ff",
          secondaryHighlightColor: "#ff7b72",
          accentHighlightColor: "#63e6be",
          promptUserBg: "#00a878",
          promptUserColor: "#061014",
          promptPathBg: "#3b82f6",
          promptPathColor: "#f8fbff",
          promptSymbolColor: "#f97316",
          inputBg: "rgba(255, 255, 255, 0.03)",
          historyStripe: "rgba(255, 255, 255, 0.05)",
          inputColor: "#f8f5f1",
          inputPlaceholder: "rgba(255, 255, 255, 0.28)",
          promptColor: "#008cff",
          toggleBackground: "rgba(255, 255, 255, 0.06)",
          toggleBorder: "1px solid rgba(255, 255, 255, 0.08)",
          toggleColor: "#f8f5f1",
        };

  const runConsoleCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    setConsoleHistory((current) => {
      const next = [...current, { type: "command", text: `> ${rawCommand}` }];

      if (command === "help") {
        return [
          ...next,
          {
            type: "response",
            text: "help, about, work, contact, linkedin, github, clear, exit",
          },
        ];
      }

      if (command === "about") {
        return [
          ...next,
          {
            type: "response",
            text: "Simona is a backend developer focused on building scalable systems, reliable APIs, and software that holds up in production.",
          },
        ];
      }

      if (command === "work") {
        return [
          ...next,
          {
            type: "response",
            text: "Focus areas: backend development, API design, system reliability, and scalable web applications.",
          },
        ];
      }

      if (command === "contact") {
        return [
          ...next,
          {
            type: "response",
            text: "Email: anchovasimona11@gmail.com",
          },
        ];
      }

      if (command === "linkedin") {
        window.open(
          "https://www.linkedin.com/in/simonaxanchova/",
          "_blank",
          "noopener,noreferrer"
        );
        return [
          ...next,
          {
            type: "response",
            text: "Opening LinkedIn...",
          },
        ];
      }

      if (command === "github") {
        window.open(
          "https://github.com/simonaxanchova",
          "_blank",
          "noopener,noreferrer"
        );
        return [
          ...next,
          {
            type: "response",
            text: "Opening GitHub...",
          },
        ];
      }

      if (command === "clear") {
        return defaultConsoleHistory;
      }

      if (command === "exit") {
        setIsConsoleOpen(false);
        return [
          ...next,
          {
            type: "response",
            text: "Closing console...",
          },
        ];
      }

      return [
        ...next,
        {
          type: "response",
          text: `Unknown command: ${rawCommand}`,
        },
      ];
    });

    setConsoleInput("");
  };

  const autocompleteConsoleCommand = () => {
    const query = consoleInput.trim().toLowerCase();

    if (!query) {
      return;
    }

    const matches = highlightedCommands.filter((command) =>
      command.startsWith(query)
    );

    if (matches.length === 1) {
      setConsoleInput(matches[0]);
    }
  };

  const renderConsoleText = (text) => {
    const parts = text.split(
      /(`[^`]+`|>|\bsimona-terminal\b|\bv1\.0\b|\b(?:help|about|work|contact|linkedin|github|clear|exit)\b|\b(?:Opening|Closing|Unknown|Email|Type)\b|https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi
    );

    return parts.map((part, index) => {
      const normalized = part.replaceAll("`", "").toLowerCase();
      const isWrappedInBackticks = part.startsWith("`") && part.endsWith("`");
      const isCommand = highlightedCommands.includes(normalized);
      const isPrompt = part === ">";
      const isTerminalName = normalized === "simona-terminal";
      const isVersion = normalized === "v1.0";
      const isStatusWord = [
        "opening",
        "closing",
        "unknown",
        "email",
        "type",
      ].includes(normalized);
      const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(part);
      const isUrl = /^https?:\/\/[^\s]+$/i.test(part);
      const isHighlighted =
        isWrappedInBackticks ||
        isCommand ||
        isPrompt ||
        isTerminalName ||
        isVersion ||
        isStatusWord ||
        isEmail ||
        isUrl;

      if (!isHighlighted) {
        return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
      }

      let color = consoleThemeStyles.highlightColor;

      if (isPrompt || isStatusWord) {
        color = consoleThemeStyles.secondaryHighlightColor;
      }

      if (isEmail || isUrl || isTerminalName || isVersion) {
        color = consoleThemeStyles.accentHighlightColor;
      }

      return (
        <Box
          key={`${part}-${index}`}
          component="span"
          sx={{
            color,
          }}
        >
          {part}
        </Box>
      );
    });
  };

  const renderPrompt = (commandText = "", isLivePrompt = false) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.7,
        width: isLivePrompt ? "auto" : "100%",
        minWidth: isLivePrompt ? "auto" : 0,
        flexShrink: 0,
      }}
    >
      <Box
        component="span"
        sx={{
          px: 0.9,
          py: 0.2,
          borderRadius: "5px",
          backgroundColor: consoleThemeStyles.promptUserBg,
          color: consoleThemeStyles.promptUserColor,
          fontFamily: "GeneralSans-Medium",
          fontSize: "0.74rem",
          letterSpacing: "0.05em",
          textTransform: "lowercase",
          flexShrink: 0,
        }}
      >
        simona@portfolio
      </Box>
      <Box
        component="span"
        sx={{
          px: 0.9,
          py: 0.2,
          borderRadius: "5px",
          backgroundColor: consoleThemeStyles.promptPathBg,
          color: consoleThemeStyles.promptPathColor,
          fontFamily: "GeneralSans-Medium",
          fontSize: "0.74rem",
          letterSpacing: "0.05em",
          flexShrink: 0,
        }}
      >
        ~/home
      </Box>
      <Box
        component="span"
        sx={{
          color: consoleThemeStyles.promptSymbolColor,
          fontFamily: "GeneralSans-Medium",
          fontSize: "0.96rem",
          flexShrink: 0,
        }}
      >
        ❯
      </Box>
      {commandText ? (
        <Box
          component="span"
          sx={{
            minWidth: 0,
            color: consoleThemeStyles.commandColor,
            fontFamily: "GeneralSans-Regular",
            fontSize: "0.95rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {renderConsoleText(commandText)}
        </Box>
      ) : null}
    </Box>
  );

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="loader" style={{ color: "#ef233c" }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="header"
        ref={headerRef}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          minHeight: "60px",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 10 },
          backgroundColor: isHeaderOnDark
            ? "rgba(12, 14, 20, 0.42)"
            : "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: headerBorder,
          transition:
            "background-color 220ms ease, border-color 220ms ease, color 220ms ease",
        }}
      >
        <Typography
          sx={{
            color: headerPrimary,
            fontFamily: "GeneralSans-Medium",
            fontSize: { xs: "0.8rem", sm: "0.95rem" },
            flexShrink: 0,
            transition: "color 220ms ease",
          }}
        >
          a. simona
        </Typography>
        <Box
          sx={{
            ml: 4,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <FaCircle color="#27b550" size={10} />
          <Typography
            sx={{
              color: headerPrimary,
              fontFamily: "GeneralSans-Regular",
              fontSize: { xs: "0.8rem", sm: "0.95rem" },
              flexShrink: 0,
              transition: "color 220ms ease",
            }}
          >
            available
          </Typography>
          <Box
            sx={{
              width: "28px",
              height: "1px",
              backgroundColor: headerDivider,
              transition: "background-color 220ms ease",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 0.25,
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                color: headerPrimary,
                fontFamily: "GeneralSans-Medium",
                fontSize: { xs: "0.8rem", sm: "0.95rem" },
                lineHeight: 1.1,
                flexShrink: 0,
                transition: "color 220ms ease",
              }}
            >
              design + development
            </Typography>
            <Typography
              sx={{
                color: headerSecondary,
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "0.68rem", sm: "0.78rem" },
                lineHeight: 1.1,
                flexShrink: 0,
                transition: "color 220ms ease",
              }}
            >
              Skopje, MK /{" "}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  color: headerPrimary,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 220ms ease",
                }}
              >
                {hours}
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: "0.5em",
                    textAlign: "center",
                    "@keyframes blinkColon": {
                      "0%, 49%": { opacity: 1 },
                      "50%, 100%": { opacity: 0.25 },
                    },
                    animation: "blinkColon 1s steps(1, end) infinite",
                  }}
                >
                  :
                </Box>
                {minutes}
              </Box>{" "}
              / GMT+2
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: { xs: 1, sm: 1.5, md: 4 },
            flex: 1,
            minWidth: 0,
            ml: 2,
          }}
        >
          {navItems.map((item) => (
            <Box
              key={item}
              component="a"
              href={`#${item}`}
              sx={{
                position: "relative",
                height: "40px",
                minWidth: { xs: "58px", sm: "68px", md: "78px" },
                px: 0.9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                cursor: "pointer",
                textDecoration: "none",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  border: "1px solid rgba(23, 23, 24, 0)",
                  transition: "border-color 220ms ease, transform 220ms ease",
                  transform: "scale(0.94)",
                },
                "& .nav-tab__single": {
                  color: headerPrimary,
                  opacity: 1,
                  transform: "translateY(0)",
                  transition:
                    "opacity 180ms ease, transform 180ms ease, color 220ms ease",
                },
                "& .nav-tab__stack": {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transform: "translateY(8px)",
                  transition: "opacity 180ms ease, transform 180ms ease",
                  pointerEvents: "none",
                },
                "& .nav-tab__reel": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  willChange: "transform",
                  transform: "translateY(0)",
                },
                "&:hover::before": {
                  borderColor: headerHoverBorder,
                  transform: "scale(1)",
                },
                "&:hover .nav-tab__single": {
                  opacity: 0,
                  transform: "translateY(-10px)",
                },
                "&:hover .nav-tab__stack": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
                "&:hover .nav-tab__reel": {
                  animation: "navTabReel 900ms linear infinite",
                },
                "@keyframes navTabReel": {
                  "0%": {
                    transform: "translateY(0)",
                  },
                  "100%": {
                    transform: "translateY(-14px)",
                  },
                },
              }}
            >
              <Typography
                className="nav-tab__single"
                sx={{
                  fontFamily: "GeneralSans-Regular",
                  fontSize: { xs: "0.72rem", sm: "0.9rem" },
                  whiteSpace: "nowrap",
                  textTransform: "lowercase",
                }}
              >
                {item}
              </Typography>
              <Box className="nav-tab__stack">
                <Box className="nav-tab__reel">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <Typography
                      key={`${item}-${index}`}
                      sx={{
                        color: headerPrimary,
                        fontFamily: "GeneralSans-Regular",
                        fontSize: { xs: "0.5rem", sm: "0.62rem" },
                        lineHeight: 1,
                        height: "14px",
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                        transition: "color 220ms ease",
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: "118vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            minHeight: "calc(100vh - 60px)",
            width: "100%",
            maxWidth: { md: "1060px" },
            mx: "auto",
            px: { xs: 2, sm: 3, md: 10 },
            py: { xs: 3, sm: 4, md: 0 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(280px, 420px) minmax(360px, 560px)",
            },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "420px",
              alignSelf: "center",
              justifySelf: { xs: "center", md: "start" },
              textAlign: { xs: "center", md: "left" },
              "@keyframes heroFadeUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(26px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Typography
              sx={{
                color: "#171718",
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "0.75rem", sm: "0.82rem" },
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 1.5,
                opacity: 0,
                animation: "heroFadeUp 700ms ease forwards",
              }}
            >
              Web developer
            </Typography>
            <Typography
              component="div"
              sx={{
                color: "#171718",
                fontFamily: "GeneralSans-Extralight",
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3rem" },
                lineHeight: 0.96,
                mb: 2,
              }}
            >
              a. simona
            </Typography>
            <Typography
              sx={{
                color: "rgba(23, 23, 24, 0.74)",
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "0.98rem", md: "1.06rem" },
                lineHeight: 1,
                maxWidth: "30ch",
                mx: { xs: "auto", md: 0 },
                opacity: 0,
                animation: "heroFadeUp 740ms ease 180ms forwards",
              }}
            >
              Building scalable backend systems and web applications with a
              focus on clean architecture, reliability, and maintainable
              software.
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 1.5,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
                opacity: 0,
                animation: "heroFadeUp 760ms ease 380ms forwards",
              }}
            >
              <Box
                component="a"
                href="#works"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "132px",
                  height: "42px",
                  px: 2,
                  border: "1px solid #171718",
                  color: "#f8f5f1",
                  backgroundColor: "#171718",
                  textDecoration: "none",
                  fontFamily: "GeneralSans-Medium",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  boxShadow: "0 14px 30px rgba(23, 23, 24, 0.14)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 18px 34px rgba(23, 23, 24, 0.18)",
                  },
                }}
              >
                View work
              </Box>
              <Typography
                component="a"
                href="mailto:anchovasimona11@gmail.com"
                sx={{
                  color: "#171718",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "132px",
                  height: "42px",
                  px: 2,
                  border: "1px solid rgba(23, 23, 24, 0.18)",
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  textDecoration: "none",
                  fontFamily: "GeneralSans-Medium",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  transition:
                    "transform 220ms ease, background-color 220ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    backgroundColor: "rgba(255, 255, 255, 0.72)",
                  },
                }}
              >
                Contact
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                columnGap: 1.6,
                rowGap: 0,
                opacity: 0,
                animation: "heroFadeUp 760ms ease 460ms forwards",
              }}
            >
              {heroDetails.map((item, index) => (
                <Box
                  key={item.label}
                  sx={{
                    py: 1.1,
                    pr: { xs: 0, sm: 1.2 },
                    textAlign: "left",
                    borderTop: "1px solid rgba(23, 23, 24, 0.08)",
                    borderRight: {
                      xs: "none",
                      sm:
                        index % 2 === 0
                          ? "1px solid rgba(23, 23, 24, 0.08)"
                          : "none",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(23, 23, 24, 0.48)",
                      fontFamily: "GeneralSans-Regular",
                      fontSize: "0.68rem",
                      mb: 0.7,
                      display: "inline-flex",
                      width: "fit-content",
                      pb: 0.2,
                      borderBottom: "1px solid rgba(23, 23, 24, 0.12)",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#171718",
                      fontFamily: "GeneralSans-Regular",
                      fontSize: "0.86rem",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              height: { xs: "340px", sm: "420px", md: "560px" },
              width: "100%",
              maxWidth: { xs: "340px", sm: "420px", md: "560px" },
              justifySelf: "center",
              borderRadius: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              background:
                "radial-gradient(circle at 50% 42%, rgba(239, 35, 60, 0.08), rgba(248, 245, 241, 0.4) 38%, transparent 72%)",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "2% 2%",
                borderRadius: "50%",
                border: "1px solid rgba(0, 140, 255, 0.16)",
                zIndex: 1,
                pointerEvents: "none",
              },
            }}
          >
            {[
              {
                label: "Design",
                top: { xs: "12%", md: "18%" },
                left: { xs: "10%", md: "6%" },
                duration: "4.4s",
              },
              {
                label: "Development",
                top: { xs: "14%", md: "20%" },
                right: { xs: "10%", md: "2%" },
                duration: "5.1s",
              },
              {
                label: "Motion",
                bottom: { xs: "12%", md: "16%" },
                left: { xs: "14%", md: "7%" },
                duration: "4.8s",
              },
              {
                label: "Creativity",
                bottom: { xs: "12%", md: "1%" },
                left: { xs: "14%", md: "50%" },
                duration: "4.8s",
              },
            ].map((badge) => (
              <Box
                key={badge.label}
                sx={{
                  position: "absolute",
                  top: badge.top,
                  right: badge.right,
                  bottom: badge.bottom,
                  left: badge.left,
                  px: 1.2,
                  py: 0.8,
                  borderRadius: "999px",
                  border: "1px solid rgba(23, 23, 24, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.54)",
                  backdropFilter: "blur(18px)",
                  fontFamily: "GeneralSans-Medium",
                  fontSize: { xs: "0.68rem", md: "0.74rem" },
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  zIndex: 2,
                }}
              >
                {badge.label}
              </Box>
            ))}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                zIndex: 0,
                transform: {
                  xs: "scale(0.55)",
                  sm: "scale(0.75)",
                  md: "scale(1)",
                },
                transformOrigin: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  animation: "heroOrbitalDrift 6.2s ease-in-out infinite",
                  "@keyframes heroOrbitalDrift": {
                    "0%, 100%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-14px)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "calc(var(--pixel-size) * 15)",
                    height: "calc(var(--pixel-size) * 15)",
                  }}
                >
                  {circlePixels.map((pixel) => (
                    <div
                      key={pixel.id}
                      className="pixel"
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${pixel.x} * var(--pixel-size) - (var(--pixel-size) * ${pixel.size} / 2))`,
                        top: `calc(50% + ${pixel.y} * var(--pixel-size) - (var(--pixel-size) * ${pixel.size} / 2))`,
                        width: `calc(var(--pixel-size) * ${pixel.size})`,
                        height: `calc(var(--pixel-size) * ${pixel.size})`,
                        backgroundColor:
                          colors[Math.floor(Math.random() * colors.length)],
                        opacity:
                          pixel.softness *
                          (0.82 +
                            0.18 *
                              Math.sin(
                                pixelTick * 0.32 +
                                  pixel.x * 0.7 +
                                  pixel.y * 0.55
                              )),
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="works"
        ref={worksSectionRef}
        onMouseMove={handleWorksPointerMove}
        onMouseLeave={() =>
          setWorksPointer((current) => ({ ...current, active: false }))
        }
        sx={{
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, sm: 3, md: 10 },
          py: { xs: 6, md: 8 },
          display: "grid",
          background:
            "linear-gradient(135deg, #f8f1f8 0%, #f3f5f9 32%, #f2f7f8 66%, #f5f8f5 100%)",
          "@keyframes worksFadeLift": {
            "0%": {
              opacity: 0,
              transform: "translateY(28px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
          "@keyframes worksAccentDrift": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-12px)",
            },
          },
          "@keyframes worksOrbFloat": {
            "0%, 100%": {
              transform: "translate3d(0, 0, 0) scale(1)",
            },
            "50%": {
              transform: "translate3d(32px, -42px, 0) scale(1.08)",
            },
          },
          "@keyframes worksGridShift": {
            "0%": {
              transform: "translate3d(0, 0, 0)",
            },
            "100%": {
              transform: "translate3d(0, -22px, 0)",
            },
          },
          "@keyframes worksBeamDrift": {
            "0%, 100%": {
              transform: "translate3d(0, 0, 0) rotate(-10deg)",
            },
            "50%": {
              transform: "translate3d(18px, -24px, 0) rotate(-6deg)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: "-14%", md: "-22%" },
              right: { xs: "-24%", md: "-10%" },
              width: { xs: "420px", md: "760px" },
              height: { xs: "420px", md: "760px" },
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 32%, rgba(255,255,255,0.04) 52%, rgba(255,255,255,0) 74%)",
              filter: "blur(10px)",
              animation: "worksOrbFloat 16s ease-in-out infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "-6%", md: "-18%" },
              left: { xs: "-28%", md: "-12%" },
              width: { xs: "360px", md: "640px" },
              height: { xs: "360px", md: "640px" },
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(7,19,61,0.28) 0%, rgba(7,19,61,0.12) 36%, rgba(7,19,61,0.02) 56%, rgba(7,19,61,0) 74%)",
              filter: "blur(4px)",
              animation: "worksOrbFloat 18s ease-in-out infinite reverse",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xs: "18%", md: "8%" },
              left: { xs: "58%", md: "64%" },
              width: { xs: "240px", md: "420px" },
              height: { xs: "240px", md: "420px" },
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xs: "30%", md: "22%" },
              left: { xs: "-18%", md: "-8%" },
              width: { xs: "420px", md: "780px" },
              height: { xs: "120px", md: "180px" },
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 26%, rgba(255,255,255,0.08) 52%, rgba(255,255,255,0) 100%)",
              filter: "blur(18px)",
              opacity: 0.75,
              animation: "worksBeamDrift 20s ease-in-out infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.22,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: { xs: "42px 42px", md: "56px 56px" },
              maskImage:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 18%, rgba(0,0,0,0.8) 78%, transparent 100%)",
              animation: "worksGridShift 12s linear infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: worksPointer.active ? 1 : 0.55,
              background: `radial-gradient(circle at ${worksPointer.x}% ${worksPointer.y}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 14%, rgba(255,255,255,0.04) 28%, rgba(255,255,255,0) 52%)`,
              transition: "opacity 220ms ease",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4 },
            maxWidth: "1180px",
            width: "100%",
            mx: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 180px" },
              gap: { xs: 1.5, md: 2 },
              alignItems: "start",
              pb: { xs: 1.5, md: 2 },
              opacity: 0,
              animation: "worksFadeLift 700ms ease forwards",
            }}
          >
            <Box sx={{ maxWidth: "820px" }}>
              <Typography
                sx={{
                  color: "#171718",
                  fontFamily: "GeneralSans-Regular",
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: { xs: 1.06, md: 1 },
                  letterSpacing: "-0.035em",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Selected work across product platforms, public services, and
                frontend systems.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              pt: { xs: 1.5, md: 2 },
              display: "grid",
              gap: 1.2,
            }}
          >
            <Typography
              sx={{
                color: "rgba(22, 33, 62, 0.62)",
                fontFamily: "GeneralSans-Regular",
                fontSize: "0.8rem",
                textAlign: "left",
              }}
            >
              Selected projects
            </Typography>
            <Box
              sx={{
                borderTop: "1px solid rgba(22, 33, 62, 0.16)",
                opacity: 0,
                animation: "worksFadeLift 760ms ease 520ms forwards",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "380px minmax(0, 1fr)" },
                gap: { xs: 2, lg: 3 },
                alignItems: "start",
              }}
            >
              <Box
                sx={{
                  pt: { xs: 1.6, md: 2 },
                  pb: { xs: 1.8, md: 2.2 },
                  pr: { lg: 2 },
                  borderBottom: {
                    xs: "1px solid rgba(22, 33, 62, 0.14)",
                    lg: "none",
                  },
                  borderRight: {
                    xs: "none",
                    lg: "1px solid rgba(22, 33, 62, 0.14)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(22, 33, 62, 0.48)",
                    fontFamily: "GeneralSans-Regular",
                    fontSize: "0.72rem",
                    mb: 1.1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <Box component="span">/filter</Box>
                  <Box component="span">clear filters</Box>
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "minmax(0, 1fr) minmax(0, 1fr)",
                    },
                    gap: 1.4,
                  }}
                >
                  <Box
                    sx={{
                      p: 1.4,
                    }}
                  >
                    <Typography
                      sx={{
                        mb: 0.9,
                        color: "rgba(22, 33, 62, 0.48)",
                        fontFamily: "GeneralSans-Regular",
                        fontSize: "0.72rem",
                        lineHeight: 1.5,
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                      }}
                    >
                      <Box
                        component="svg"
                        sx={{
                          display: "inline-flex",
                          width: "14px",
                          height: "14px",
                          flexShrink: 0,
                          color: "#171718",
                        }}
                        viewBox="0 0 32 32"
                        fill="currentColor"
                      >
                        <path d="M 3 5 L 3 27 L 29 27 L 29 7 L 12 7 L 12 5 L 3 5 z M 5 7 L 10 7 L 10 9 L 11 9 L 27 9 L 27 11 L 5 11 L 5 7 z M 5 13 L 27 13 L 27 25 L 5 25 L 5 13 z" />
                      </Box>
                      Selection / Status
                    </Typography>
                    {statusOptions.map((option, index) => (
                      <Box
                        key={option.value}
                        component="button"
                        type="button"
                        onClick={() => setSelectedProjectStatus(option.value)}
                        sx={{
                          width: "100%",
                          px: 0,
                          py: 0,
                          border: "none",
                          background: "transparent",
                          display: "block",
                          textAlign: "left",
                          cursor: "pointer",
                          opacity:
                            selectedProjectStatus === option.value ? 1 : 0.66,
                          transition: "opacity 180ms ease",
                          "&:hover": { opacity: 1 },
                          "&:not(:last-of-type)": { mb: 0.72 },
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              selectedProjectStatus === option.value
                                ? "#16213e"
                                : "rgba(22, 33, 62, 0.78)",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: "0.78rem",
                            lineHeight: 1.6,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.65,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: "9px",
                              height: "9px",
                              display: "grid",
                              gridTemplateColumns: "repeat(3, 1fr)",
                              gridTemplateRows: "repeat(3, 1fr)",
                              gap: "1px",
                              flexShrink: 0,
                            }}
                          >
                            {[0, 1, 2, 3, 5, 6, 7, 8].map((cell) => (
                              <Box
                                key={`${option.value}-status-cell-${cell}`}
                                sx={{
                                  gridColumn: `${(cell % 3) + 1}`,
                                  gridRow: `${Math.floor(cell / 3) + 1}`,
                                  backgroundColor: "rgba(22, 33, 62, 0.72)",
                                }}
                              />
                            ))}
                            {selectedProjectStatus === option.value ? (
                              <Box
                                sx={{
                                  gridColumn: "2",
                                  gridRow: "2",
                                  backgroundColor: "#16213e",
                                }}
                              />
                            ) : null}
                          </Box>
                          <Box
                            component="span"
                            sx={{
                              px: 0.45,
                              py: 0.05,
                              backgroundColor:
                                selectedProjectStatus === option.value
                                  ? activeFilterHighlightColor
                                  : "transparent",
                              transition: "background-color 1200ms ease",
                            }}
                          >
                            {option.label}
                          </Box>
                        </Typography>
                        <Typography
                          sx={{
                            pl: "16px",
                            color: "rgba(22, 33, 62, 0.46)",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: "0.66rem",
                            lineHeight: 1.45,
                          }}
                        >
                          {option.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      p: 1.4,
                      // border: "1px solid rgba(22, 33, 62, 0.12)",
                      // backgroundColor: "rgba(255, 255, 255, 0.52)",
                    }}
                  >
                    <Typography
                      sx={{
                        mb: 0.9,
                        color: "rgba(22, 33, 62, 0.48)",
                        fontFamily: "GeneralSans-Regular",
                        fontSize: "0.72rem",
                        lineHeight: 1.5,
                        // textTransform: "uppercase",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                      }}
                    >
                      <Box
                        component="svg"
                        sx={{
                          display: "inline-flex",
                          width: "14px",
                          height: "14px",
                          flexShrink: 0,
                          color: "#171718",
                        }}
                        viewBox="0 0 32 32"
                        fill="currentColor"
                      >
                        <path d="M 3 5 L 3 27 L 29 27 L 29 7 L 12 7 L 12 5 L 3 5 z M 5 7 L 10 7 L 10 9 L 11 9 L 27 9 L 27 11 L 5 11 L 5 7 z M 5 13 L 27 13 L 27 25 L 5 25 L 5 13 z" />
                      </Box>
                      Selection / Scope
                    </Typography>
                    {scopeOptions.map((option, index) => (
                      <Box
                        key={option.value}
                        component="button"
                        type="button"
                        onClick={() => setSelectedProjectScope(option.value)}
                        sx={{
                          width: "100%",
                          px: 0,
                          py: 0,
                          border: "none",
                          background: "transparent",
                          display: "block",
                          textAlign: "left",
                          cursor: "pointer",
                          opacity:
                            selectedProjectScope === option.value ? 1 : 0.66,
                          transition: "opacity 180ms ease",
                          "&:hover": { opacity: 1 },
                          "&:not(:last-of-type)": { mb: 0.72 },
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              selectedProjectScope === option.value
                                ? "#16213e"
                                : "rgba(22, 33, 62, 0.78)",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: "0.78rem",
                            lineHeight: 1.6,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.65,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: "9px",
                              height: "9px",
                              display: "grid",
                              gridTemplateColumns: "repeat(3, 1fr)",
                              gridTemplateRows: "repeat(3, 1fr)",
                              gap: "1px",
                              flexShrink: 0,
                            }}
                          >
                            {[0, 1, 2, 3, 5, 6, 7, 8].map((cell) => (
                              <Box
                                key={`${option.value}-scope-cell-${cell}`}
                                sx={{
                                  gridColumn: `${(cell % 3) + 1}`,
                                  gridRow: `${Math.floor(cell / 3) + 1}`,
                                  backgroundColor: "rgba(22, 33, 62, 0.72)",
                                }}
                              />
                            ))}
                            {selectedProjectScope === option.value ? (
                              <Box
                                sx={{
                                  gridColumn: "2",
                                  gridRow: "2",
                                  backgroundColor: "#16213e",
                                }}
                              />
                            ) : null}
                          </Box>
                          <Box
                            component="span"
                            sx={{
                              px: 0.45,
                              py: 0.05,
                              backgroundColor:
                                selectedProjectScope === option.value
                                  ? activeFilterHighlightColor
                                  : "transparent",
                              transition: "background-color 1200ms ease",
                            }}
                          >
                            {option.label}
                          </Box>
                        </Typography>
                        <Typography
                          sx={{
                            pl: "16px",
                            color: "rgba(22, 33, 62, 0.46)",
                            fontFamily: "GeneralSans-Regular",
                            lineHeight: 1.45,
                          }}
                        >
                          {option.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box ref={projectsListRef}>
                {visibleProjects.length > 0 ? (
                  visibleProjects.map((project) => (
                    <Box
                      key={project.id}
                      onClick={() =>
                        setExpandedProjectId((current) =>
                          current === project.id ? null : project.id
                        )
                      }
                      sx={{
                        position: "relative",
                        width: "100%",
                        py: { xs: 1.6, md: 2 },
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: "96px minmax(0, 1fr) auto",
                        },
                        alignItems: "start",
                        borderBottom: "1px solid rgba(22, 33, 62, 0.16)",
                        cursor: "pointer",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "50%",
                          width: "20px",
                          height: "1px",
                          backgroundColor: "rgba(22, 33, 62, 0.68)",
                          opacity: 0,
                        },
                        backgroundColor:
                          expandedProjectId === project.id
                            ? "rgba(255, 255, 255, 0.38)"
                            : "transparent",
                      }}
                    >
                      <Box
                        sx={{
                          gridColumn: "1 / -1",
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "1fr",
                            md: "96px minmax(0, 1fr) auto",
                          },
                          alignItems: "start",
                          "&:hover": {
                            backgroundColor: activeFilterHighlightColor,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgba(22, 33, 62, 0.62)",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: "0.78rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            textAlign: "left",
                            maxWidth: "50px",
                          }}
                        >
                          [{project.id}]
                        </Typography>
                        <Typography
                          sx={{
                            color: "#16213e",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: { xs: "1.2rem", md: "1.35rem" },
                            lineHeight: 1,
                            textAlign: "left",
                            gridColumn: { xs: "1", md: "2" },
                          }}
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(22, 33, 62, 0.78)",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: "0.8rem",
                            textAlign: "left",
                            gridColumn: { xs: "1", md: "2" },
                            mt: { md: 0.45 },
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(22, 33, 62, 0.58)",
                            fontFamily: "GeneralSans-Regular",
                            fontSize: "0.82rem",
                            whiteSpace: "nowrap",
                            gridColumn: { xs: "1", md: "3" },
                            gridRow: { md: "1 / span 2" },
                            alignSelf: "start",
                          }}
                        >
                          {project.date}
                        </Typography>
                      </Box>
                      {expandedProjectId === project.id ? (
                        <Box
                          sx={{
                            gridColumn: "1 / -1",
                            mt: 1.1,
                            display: "grid",
                            gridTemplateColumns: {
                              xs: "1fr",
                              md: "96px minmax(0, 1fr)",
                            },
                            columnGap: 0,
                            rowGap: 0.45,
                          }}
                        >
                          <Typography
                            sx={{
                              mt: 0.8,
                              color: "rgba(22, 33, 62, 0.5)",
                              fontFamily: "GeneralSans-Regular",
                              fontSize: "0.72rem",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              textAlign: "left",
                              gridColumn: { xs: "1", md: "1" },
                            }}
                          >
                            Summary:
                          </Typography>
                          <Typography
                            sx={{
                              mt: 0.8,
                              color: "rgba(22, 33, 62, 0.84)",
                              fontFamily: "GeneralSans-Regular",
                              fontSize: "0.92rem",
                              lineHeight: 1.45,
                              textAlign: "left",
                              gridColumn: { xs: "1", md: "2" },
                              maxWidth: "72ch",
                            }}
                          >
                            {project.detail}
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(22, 33, 62, 0.5)",
                              fontFamily: "GeneralSans-Regular",
                              fontSize: "0.72rem",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              textAlign: "left",
                              gridColumn: { xs: "1", md: "1" },
                            }}
                          >
                            Topic:
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(22, 33, 62, 0.84)",
                              fontFamily: "GeneralSans-Regular",
                              fontSize: "0.92rem",
                              lineHeight: 1.45,
                              textAlign: "left",
                              gridColumn: { xs: "1", md: "2" },
                              border: "1px dashed #cacaca",
                              display: "inline-flex",
                              width: "fit-content",
                              px: 0.5,
                              py: 0.08,
                              wordBreak: "break-word",
                            }}
                          >
                            {project.topic}
                          </Typography>
                        </Box>
                      ) : null}
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={{
                      py: { xs: 2.4, md: 3 },
                      borderBottom: "1px solid rgba(22, 33, 62, 0.16)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(22, 33, 62, 0.78)",
                        fontFamily: "GeneralSans-Regular",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      No projects match this combination yet.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="about"
        ref={aboutSectionRef}
        sx={{
          px: { xs: 2, sm: 3, md: 10 },
          py: { xs: 6, md: 8 },
          backgroundColor: "#171718",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1180px",
            width: "100%",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.1fr) 1fr" },
            gap: { xs: 3, md: 4, lg: 6 },
            padding: "10px 15px",
            border: "1px solid #97021C",
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 1,
                color: "rgba(255, 255, 255, 0.6)",
                fontFamily: "GeneralSans-Medium",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                maxWidth: "14ch",
                color: "#ffffff",
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "2rem", md: "2.9rem" },
                lineHeight: { xs: 1.04, md: 0.9 },
                letterSpacing: "-0.035em",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Backend-minded product work with a strong feel for interface.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <Typography
              sx={{
                maxWidth: "56ch",
                color: "rgba(255, 255, 255, 0.76)",
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "1rem", md: "1.06rem" },
                lineHeight: 1,
                textAlign: "left",
              }}
            >
              I build software with a backend-first perspective and a strong
              sensitivity to how products feel in use. The goal is usually the
              same: create systems that are reliable under pressure, easy for
              teams to work in, and polished enough that the user experience
              feels intentional all the way through.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
                gap: 1,
              }}
            >
              {aboutStats.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    p: 1.4,
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <Typography
                    sx={{
                      mb: 0.55,
                      color: "rgba(255, 255, 255, 0.54)",
                      fontFamily: "GeneralSans-Medium",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontFamily: "GeneralSans-Regular",
                      fontSize: "0.92rem",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: 0,
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              {aboutPrinciples.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    py: { xs: 1.6, md: 1.9 },
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
                    gap: { xs: 0.7, md: 2 },
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontFamily: "GeneralSans-Medium",
                      fontSize: "0.92rem",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.74)",
                      fontFamily: "GeneralSans-Regular",
                      fontSize: "0.95rem",
                      lineHeight: 1,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="contact"
        sx={{
          px: { xs: 2, sm: 3, md: 10 },
          py: { xs: 6, md: 8 },
          borderTop: `1px solid ${sectionLine}`,
        }}
      >
        <Box
          sx={{
            maxWidth: "1180px",
            width: "100%",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 360px" },
            gap: { xs: 3, md: 4, lg: 6 },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 1,
                color: sectionInkSoft,
                fontFamily: "GeneralSans-Medium",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                maxWidth: "12ch",
                color: sectionInk,
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "2.1rem", md: "3rem" },
                lineHeight: { xs: 1.04, md: 0.98 },
                letterSpacing: "-0.04em",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Open to thoughtful products and good teams.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                maxWidth: "50ch",
                color: sectionBody,
                fontFamily: "GeneralSans-Regular",
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.1,
                textAlign: "left",
              }}
            >
              If you are building a product, refining an existing platform, or
              need a backend engineer who can work with both structure and
              presentation, feel free to reach out.
            </Typography>
            <Typography
              component="a"
              href="mailto:anchovasimona11@gmail.com"
              sx={{
                mt: 3,
                display: "block",
                width: "fit-content",
                color: sectionInk,
                fontFamily: "GeneralSans-Extralight",
                fontSize: { xs: "1.45rem", md: "1.7rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              anchovasimona11@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          left: "50%",
          bottom: { xs: 12, md: 20 },
          transform: "translateX(-50%)",
          zIndex: 30,
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "calc(100% - 24px)",
          maxWidth: "560px",
          pointerEvents: "none",
        }}
      >
        {shortcutActions.map((item) => (
          <Box
            key={item.label}
            component="button"
            type="button"
            onClick={item.onClick}
            sx={{
              px: 1.2,
              py: 0.78,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              color: "#171718",
              fontFamily: "GeneralSans-Medium",
              fontSize: { xs: "0.68rem", md: "0.74rem" },
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              boxShadow: "0 14px 30px rgba(23, 23, 24, 0.06)",
              cursor: "pointer",
              outline: "none",
              pointerEvents: "auto",
              transition: "transform 180ms ease, box-shadow 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 18px 34px rgba(23, 23, 24, 0.1)",
              },
            }}
          >
            {item.label}
          </Box>
        ))}
      </Box>
      <Box
        component="footer"
        sx={{
          px: { xs: 2, sm: 3, md: 10 },
          py: 2,
          backgroundColor: sectionPanel,
          width: "100%",
          height: "40px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1180px",
            mx: "auto",
            width: "100%",
            position: "relative",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 360px" },
            alignItems: "center",
            gap: { xs: 3, md: 4, lg: 6 },
          }}
        ></Box>
      </Box>

      {isConsoleOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "rgba(12, 14, 20, 0.4)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
          onClick={() => setIsConsoleOpen(false)}
        >
          <Box
            sx={{
              width: "min(760px, 100%)",
              height: "min(72vh, 520px)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: "24px",
              border: consoleThemeStyles.shellBorder,
              background: consoleThemeStyles.shellBackground,
              boxShadow: consoleThemeStyles.shellShadow,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <Box
              sx={{
                height: "54px",
                px: 2,
                borderBottom: consoleThemeStyles.headerBorder,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
                  <Box
                    key={color}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: color,
                    }}
                  />
                ))}
              </Box>
              <Typography
                sx={{
                  color: consoleThemeStyles.titleColor,
                  fontFamily: "GeneralSans-Regular",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Console
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  component="button"
                  type="button"
                  onClick={() =>
                    setConsoleTheme((current) =>
                      current === "dark" ? "light" : "dark"
                    )
                  }
                  sx={{
                    px: 1.1,
                    py: 0.55,
                    borderRadius: "999px",
                    border: consoleThemeStyles.toggleBorder,
                    background: consoleThemeStyles.toggleBackground,
                    color: consoleThemeStyles.toggleColor,
                    fontFamily: "GeneralSans-Medium",
                    fontSize: "0.7rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                  }}
                >
                  {consoleTheme === "dark" ? (
                    <FiSun size={15} />
                  ) : (
                    <FiMoon size={15} />
                  )}
                </Box>
                <Typography
                  sx={{
                    color: consoleThemeStyles.metaColor,
                    fontFamily: "GeneralSans-Regular",
                    fontSize: "0.72rem",
                  }}
                >
                  esc to close
                </Typography>
              </Box>
            </Box>

            <Box
              ref={consoleHistoryRef}
              sx={{
                flex: 1,
                minHeight: 0,
                px: 2,
                py: 2,
                overflowY: "auto",
                fontFamily: "GeneralSans-Regular",
                textAlign: "left",
              }}
            >
              {consoleHistory.map((entry, index) => (
                <Box
                  key={`${entry.type}-${index}`}
                  sx={{
                    mb: 1.2,
                    pl: entry.type === "response" ? 1.1 : 0,
                    borderLeft:
                      entry.type === "response"
                        ? `1px solid ${consoleThemeStyles.historyStripe}`
                        : "none",
                  }}
                >
                  {entry.type === "command" ? (
                    renderPrompt(entry.text.replace(/^>\s*/, ""))
                  ) : (
                    <Typography
                      sx={{
                        color:
                          entry.type === "system"
                            ? consoleThemeStyles.systemColor
                            : consoleThemeStyles.responseColor,
                        fontFamily: "GeneralSans-Regular",
                        fontSize: "0.92rem",
                        lineHeight: 1.65,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {renderConsoleText(entry.text)}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>

            <Box
              component="form"
              onSubmit={(event) => {
                event.preventDefault();
                runConsoleCommand(consoleInput);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1.6,
                borderTop: consoleThemeStyles.headerBorder,
                textAlign: "left",
                backgroundColor: consoleThemeStyles.inputBg,
              }}
            >
              {renderPrompt("", true)}
              <Box
                ref={consoleInputRef}
                component="input"
                value={consoleInput}
                onChange={(event) => setConsoleInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Tab") {
                    event.preventDefault();
                    autocompleteConsoleCommand();
                  }
                }}
                placeholder="Type a command..."
                sx={{
                  flex: 1,
                  minWidth: 0,
                  ml: 1,
                  border: 0,
                  outline: "none",
                  background: "transparent",
                  color: consoleThemeStyles.inputColor,
                  fontFamily: "GeneralSans-Regular",
                  fontSize: "0.95rem",
                  "&::placeholder": {
                    color: consoleThemeStyles.inputPlaceholder,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
