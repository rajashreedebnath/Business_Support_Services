const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Service data
const services = [
  {
    id: 1,
    title: "Presentation Design",
    icon: "/assets/Presentation Design.png",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Audio - Visual Production",
    icon: "/assets/Audio - Visual Production.png",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Translation Services",
    icon: "/assets/Translation Services.png",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Graphic Design",
    icon: "/assets/Graphic Design.png",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Research & Analytics",
    icon: "/assets/Research & Analytics.png",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    title: "Data Processing",
    icon: "/assets/Data Processing.png",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
];

// API Endpoints
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/services", (req, res) => {
  res.json(services);
});

app.post("/api/contact", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (email.endsWith("@ez.works")) {
    return res
      .status(422)
      .json({ error: "Emails ending with '@ez.works' are not allowed" });
  }

  return res.status(200).json({ message: "Form Submitted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
