"use client"

import {Button, Container, Grid, Group, Paper, PaperProps, Stack, Text,} from "@mantine/core";
import {IconChevronRight} from "@tabler/icons-react";
import {MapChart, PageHeader, ProjectsTable, RevenueChart, SalesChart, StatsGrid} from "@/components";
import StatsData from "../../../mocks/StatsGrid.json"
import ProjectsData from "../../../mocks/Projects.json"
import {Metadata} from "next";

const PAPER_PROPS: PaperProps = {
  p: "md",
  shadow: "md",
  radius: "md",
  style: {height: '100%'}
}

function Page() {
  return (
    <>
      <head>
        <title>Sass Dashboard | DesignSparx</title>
        <meta name="description"
              content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"/>
      </head>
      <Container fluid>
        <Stack gap="lg">
          <PageHeader title="Saas dashboard" withActions={true}/>
          <StatsGrid data={StatsData.data} paperProps={PAPER_PROPS}/>
          <Grid>
            <Grid.Col span={{base: 12, md: 6, lg: 5}}>
              <MapChart {...PAPER_PROPS}/>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6, lg: 7}}>
              <RevenueChart {...PAPER_PROPS}/>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6, lg: 4}}>
              <SalesChart {...PAPER_PROPS}/>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6, lg: 8}}>
              <Paper {...PAPER_PROPS}>
                <Group justify="space-between" mb="md">
                  <Text size="lg" fw={600}>Tasks</Text>
                  <Button variant="subtle" rightSection={<IconChevronRight size={16}/>}>View all</Button>
                </Group>
                <ProjectsTable data={ProjectsData.slice(0, 6)}/>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default Page;
