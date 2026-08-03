import { Paper, Typography, Box } from "@mui/material";

export default function StatCard({
    icon,
    title,
    value,
    color
}) {

    return (

        <Paper
            elevation={2}
            sx={{
                p:3,
                borderRadius:4,
                height:140,

                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",

                transition:".25s",

                "&:hover":{
                    transform:"translateY(-6px)",
                    boxShadow:8
                }
            }}
        >

            <Box
                sx={{
                    width:48,
                    height:48,
                    borderRadius:3,
                    bgcolor:color,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"#fff",
                    fontSize:24
                }}
            >
                {icon}
            </Box>

            <Box>

                <Typography
                    variant="h4"
                    fontWeight={700}
                >
                    {value}
                </Typography>

                <Typography color="text.secondary">
                    {title}
                </Typography>

            </Box>

        </Paper>

    )

}