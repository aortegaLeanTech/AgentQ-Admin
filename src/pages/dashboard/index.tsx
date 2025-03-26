import React from "react";
import Head from "next/head";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useTheme } from "@/theme/ThemeSwitcher";
import { useColorTheme } from "@/theme/colorTheme";
import { Icon } from "@/components/ui/Icon/Icon";

// Importamos los componentes que hemos creado
import { DateRange } from "@/components/features/dashboard/DateRangeSelector";
import { DashboardService } from "@/components/features/dashboard/DashboardService";

export default function Dashboard() {
  // Estado para los datos del dashboard
  const [dateRange, setDateRange] = React.useState<DateRange>("month");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [mounted, setMounted] = React.useState(false);

  // Usar los hooks de tema en el nivel superior del componente
  const { isDarkMode } = useTheme();
  const theme = useColorTheme();
  const muiTheme = useMuiTheme();

  // Solo actualizar el estado de montaje
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Función para cargar los datos del dashboard según el rango de fechas
  const loadDashboardData = async (range: DateRange) => {
    setLoading(true);
    try {
      const data = await DashboardService.getDashboardData(range);
    } catch (error) {
      console.error("Error al cargar datos del dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar los datos cuando cambia el rango de fechas
  React.useEffect(() => {
    loadDashboardData(dateRange);
  }, [dateRange]);

  // Manejador para el cambio de rango de fechas
  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
  };

  // Manejador para ver todas las actividades
  const handleViewAllActivities = () => {
    // En una implementación real, aquí redirigimos a la página de todas las actividades
    console.log("Ver todas las actividades");
  };

  return (
    <>
      <Head>
        <title>Dashboard | AgentQ Admin</title>
        <meta
          name="description"
          content="Dashboard de administración para la plataforma AgentQ"
        />
      </Head>

      <Container maxWidth={false} sx={{ py: 3, px: { xs: 2, md: 3 } }}>
        {/* Encabezado y selector de fechas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: 4,
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                mb: 1,
                color: theme.textPrimary,
                fontWeight: 700,
                fontSize: { xs: "1.4rem", sm: "1.5rem" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: theme.primary,
                  mr: 1,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                |
              </Box>
              Dashboard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.textSecondary,
                fontSize: "0.875rem",
                ml: { xs: 0, sm: 2.75 },
              }}
            >
              Here's your analytic details
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.textSecondary,
                borderColor: theme.divider,
                bgcolor: theme.headerBar,
                px: 2,
                py: 0.75,
                "&:hover": {
                  bgcolor: theme.hoverBg,
                  borderColor: theme.divider,
                },
              }}
              startIcon={<Icon icon="mdi:filter-variant" width={18} />}
            >
              Filter by
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.textSecondary,
                borderColor: theme.divider,
                bgcolor: theme.headerBar,
                px: 2,
                py: 0.75,
                "&:hover": {
                  bgcolor: theme.hoverBg,
                  borderColor: theme.divider,
                },
              }}
              startIcon={<Icon icon="mdi:export" width={18} />}
            >
              Exports
            </Button>
          </Box>
        </Box>

        {/* Tarjetas de resumen */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: theme.contentBg,
                borderRadius: 2,
                height: "100%",
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  borderColor: `${theme.primary}30`,
                },
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.textSecondary,
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  Total Sales
                </Typography>
                <Box sx={{ color: theme.textMuted }}>
                  <Icon icon="mdi:dots-horizontal" />
                </Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.textPrimary,
                  mb: 1,
                  fontWeight: 700,
                  fontSize: "1.75rem",
                }}
              >
                $120,784.02
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: `${muiTheme.palette.success.main}15`,
                    color: muiTheme.palette.success.main,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  <Icon icon="mdi:arrow-up" width={16} /> 5.2%
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.textMuted,
                    ml: 1,
                    fontSize: "0.75rem",
                  }}
                >
                  vs last today
                </Typography>
              </Box>
              <Button
                sx={{
                  color: theme.primary,
                  textTransform: "none",
                  mt: 1,
                  p: 0,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                endIcon={<Icon icon="mdi:arrow-right" width={16} />}
              >
                View Report
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: theme.contentBg,
                borderRadius: 2,
                height: "100%",
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  borderColor: `${theme.primary}30`,
                },
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.textSecondary,
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  Total Orders
                </Typography>
                <Box sx={{ color: theme.textMuted }}>
                  <Icon icon="mdi:dots-horizontal" />
                </Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.textPrimary,
                  mb: 1,
                  fontWeight: 700,
                  fontSize: "1.75rem",
                }}
              >
                28,834
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: `${muiTheme.palette.error.main}15`,
                    color: muiTheme.palette.error.main,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  <Icon icon="mdi:arrow-down" width={16} /> 2.5%
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.textMuted,
                    ml: 1,
                    fontSize: "0.75rem",
                  }}
                >
                  vs last today
                </Typography>
              </Box>
              <Button
                sx={{
                  color: theme.primary,
                  textTransform: "none",
                  mt: 1,
                  p: 0,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                endIcon={<Icon icon="mdi:arrow-right" width={16} />}
              >
                View Report
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: theme.contentBg,
                borderRadius: 2,
                height: "100%",
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  borderColor: `${theme.primary}30`,
                },
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.textSecondary,
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  Visitors
                </Typography>
                <Box sx={{ color: theme.textMuted }}>
                  <Icon icon="mdi:dots-horizontal" />
                </Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.textPrimary,
                  mb: 1,
                  fontWeight: 700,
                  fontSize: "1.75rem",
                }}
              >
                18,896
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: `${muiTheme.palette.error.main}15`,
                    color: muiTheme.palette.error.main,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  <Icon icon="mdi:arrow-down" width={16} /> 8.4%
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.textMuted,
                    ml: 1,
                    fontSize: "0.75rem",
                  }}
                >
                  vs last today
                </Typography>
              </Box>
              <Button
                sx={{
                  color: theme.primary,
                  textTransform: "none",
                  mt: 1,
                  p: 0,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                endIcon={<Icon icon="mdi:arrow-right" width={16} />}
              >
                View Report
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: theme.contentBg,
                borderRadius: 2,
                height: "100%",
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  borderColor: `${theme.primary}30`,
                },
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.textSecondary,
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  Refunded
                </Typography>
                <Box sx={{ color: theme.textMuted }}>
                  <Icon icon="mdi:dots-horizontal" />
                </Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.textPrimary,
                  mb: 1,
                  fontWeight: 700,
                  fontSize: "1.75rem",
                }}
              >
                2,876
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: `${muiTheme.palette.success.main}15`,
                    color: muiTheme.palette.success.main,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  <Icon icon="mdi:arrow-up" width={16} /> 4.5%
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.textMuted,
                    ml: 1,
                    fontSize: "0.75rem",
                  }}
                >
                  vs last today
                </Typography>
              </Box>
              <Button
                sx={{
                  color: theme.primary,
                  textTransform: "none",
                  mt: 1,
                  p: 0,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                endIcon={<Icon icon="mdi:arrow-right" width={16} />}
              >
                View Report
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Revenue Chart */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: theme.contentBg,
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  borderColor: `${theme.primary}20`,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.textPrimary,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Revenue
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button
                    size="small"
                    sx={{
                      bgcolor: theme.hoverBg,
                      borderRadius: "8px",
                      minWidth: "auto",
                      px: 1.5,
                      py: 0.5,
                      color: theme.textSecondary,
                      fontWeight: 500,
                      "&:hover": {
                        bgcolor: `${theme.primary}15`,
                      },
                    }}
                  >
                    Month
                  </Button>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mb: 3 }}>
                <Box sx={{ mr: 3 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.textPrimary,
                      fontWeight: 700,
                      fontSize: "1.75rem",
                    }}
                  >
                    $16,400.12
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: muiTheme.palette.success.main,
                        bgcolor: `${muiTheme.palette.success.main}15`,
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        mr: 2,
                      }}
                    >
                      <Icon
                        icon="mdi:arrow-up"
                        width={16}
                        style={{ marginRight: "2px" }}
                      />{" "}
                      8.2%
                    </Box>
                    <Button
                      size="small"
                      sx={{
                        mr: 1,
                        minWidth: "auto",
                        fontWeight: 600,
                        bgcolor: theme.primary,
                        color: "#fff",
                        px: 1.5,
                        "&:hover": {
                          bgcolor: theme.primary,
                        },
                      }}
                    >
                      Profit
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        minWidth: "auto",
                        color: theme.textSecondary,
                        borderColor: theme.divider,
                        bgcolor: "transparent",
                        border: `1px solid ${theme.divider}`,
                        px: 1.5,
                      }}
                    >
                      Loss
                    </Button>
                  </Box>
                </Box>
              </Box>

              {/* Barchart */}
              <Box
                sx={{
                  height: 200,
                  display: "flex",
                  alignItems: "flex-end",
                  mt: 4,
                }}
              >
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                  (month, index) => {
                    const heights = [35, 70, 50, 80, 60, 45];
                    return (
                      <Box
                        key={month}
                        sx={{
                          flex: 1,
                          position: "relative",
                          height: `${heights[index]}%`,
                          backgroundColor:
                            index === 3 ? theme.primary : `${theme.primary}90`,
                          mx: 0.8,
                          borderRadius: "6px 6px 2px 2px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor: theme.primary,
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: "white",
                            mb: 1,
                            fontSize: "0.7rem",
                            fontWeight: 600,
                          }}
                        >
                          {heights[index]}%
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            position: "absolute",
                            bottom: -22,
                            color: theme.textSecondary,
                            fontWeight: 500,
                          }}
                        >
                          {month}
                        </Typography>
                      </Box>
                    );
                  }
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Recent Activity and Traffic Channel */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: theme.contentBg,
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                height: "100%",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  borderColor: `${theme.primary}20`,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.textPrimary,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Recent Activity
                </Typography>
                <Button
                  size="small"
                  sx={{
                    bgcolor: theme.hoverBg,
                    borderRadius: "8px",
                    minWidth: "auto",
                    px: 1.5,
                    py: 0.5,
                    color: theme.textSecondary,
                    fontWeight: 500,
                    "&:hover": {
                      bgcolor: `${theme.primary}15`,
                    },
                  }}
                >
                  Last 24h
                </Button>
              </Box>

              <Box sx={{ overflowX: "auto" }}>
                <Box sx={{ minWidth: 600, width: "100%" }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                      mb: 1,
                      px: 2,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Customer
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Status
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Customer ID
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Reviewed
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Amount
                    </Typography>
                  </Box>

                  {[
                    {
                      name: "Ronald Richards",
                      email: "ronald@example.com",
                      status: "Reminder",
                      id: "#7458820",
                      time: "5 min ago",
                      amount: "$12,458.20",
                    },
                    {
                      name: "Darrell Steward",
                      email: "darrell@example.com",
                      status: "Signed Up",
                      id: "#7213415",
                      time: "10 min ago",
                      amount: "$520.00",
                    },
                    {
                      name: "Bessie McKay",
                      email: "bessie@example.com",
                      status: "New Customer",
                      id: "#6547837",
                      time: "15 min ago",
                      amount: "$2,865.00",
                    },
                  ].map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                        py: 2,
                        px: 2,
                        borderBottom: "1px solid",
                        borderColor: isDarkMode
                          ? "rgba(255,255,255,0.1)"
                          : "divider",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            mr: 1.5,
                          }}
                        >
                          {item.name.charAt(0)}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: isDarkMode ? "white" : "text.primary",
                              fontWeight: "bold",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.email}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor:
                              item.status === "Reminder"
                                ? "grey.700"
                                : item.status === "Signed Up"
                                ? "#FF4E00"
                                : "#6366F1",
                            color: "white",
                            borderRadius: 1,
                            fontSize: "0.7rem",
                            fontWeight: "medium",
                          }}
                        >
                          {item.status}
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: isDarkMode ? "white" : "text.primary" }}
                        >
                          {item.id}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: isDarkMode ? "white" : "text.primary" }}
                        >
                          {item.time}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: isDarkMode ? "white" : "text.primary" }}
                        >
                          {item.amount}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: theme.contentBg,
                border: `1px solid ${theme.divider}`,
                transition: "all 0.2s ease-in-out",
                height: "100%",
                "&:hover": {
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  borderColor: `${theme.primary}20`,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.textPrimary,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Traffic Channel
                </Typography>
                <Button
                  size="small"
                  sx={{
                    bgcolor: theme.hoverBg,
                    borderRadius: "8px",
                    minWidth: "auto",
                    px: 1.5,
                    py: 0.5,
                    color: theme.textSecondary,
                    fontWeight: 500,
                    "&:hover": {
                      bgcolor: `${theme.primary}15`,
                    },
                  }}
                >
                  All time
                </Button>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                {/* Circular chart placeholder */}
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    position: "relative",
                    background:
                      "conic-gradient(#6366F1 0% 50%, #FF4E00 50% 70%, #10B981 70% 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      bgcolor: isDarkMode ? "#0A2540" : "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  ></Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  mt: 3,
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#6366F1",
                        mr: 1,
                      }}
                    ></Box>
                    <Typography
                      variant="body2"
                      sx={{ color: isDarkMode ? "white" : "text.primary" }}
                    >
                      Direct
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? "white" : "text.primary",
                      fontWeight: "bold",
                    }}
                  >
                    50.5%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#FF4E00",
                        mr: 1,
                      }}
                    ></Box>
                    <Typography
                      variant="body2"
                      sx={{ color: isDarkMode ? "white" : "text.primary" }}
                    >
                      Referral
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? "white" : "text.primary",
                      fontWeight: "bold",
                    }}
                  >
                    30.5%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#10B981",
                        mr: 1,
                      }}
                    ></Box>
                    <Typography
                      variant="body2"
                      sx={{ color: isDarkMode ? "white" : "text.primary" }}
                    >
                      Organic
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? "white" : "text.primary",
                      fontWeight: "bold",
                    }}
                  >
                    19%
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
