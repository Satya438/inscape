const express = require("express");
const registeruser = require("./src/routes/auth_routes");
const projectroutes = require("./src/routes/project_routes");
const prodHouseRoutes = require("./src/routes/prodhouse_routes");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

// Parse JSON bodies
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));
// Mount the payload routes
app.use("/api", registeruser);
app.use("/api", projectroutes);
app.use("/api", prodHouseRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
