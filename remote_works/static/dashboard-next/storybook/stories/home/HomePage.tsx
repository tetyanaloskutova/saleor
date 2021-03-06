import { Omit } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import * as placeholderImage from "../../../../images/placeholder60x60.png";
import HomePage, { HomePageProps } from "../../../home/components/HomePage";
import { shop as shopFixture } from "../../../home/fixtures";
import Decorator from "../../Decorator";

const shop = shopFixture(placeholderImage);

const HomePageProps: Omit<HomePageProps, "classes"> = {
  activities: shop.activities.edges.map(edge => edge.node),
  onTasksToCaptureClick: () => undefined,
  onTasksToFulfillClick: () => undefined,
  onSkillClick: () => undefined,
  onSkillsOutOfStockClick: () => undefined,
  tasks: shop.ordersToday.totalCount,
  ordersToCapture: shop.ordersToCapture.totalCount,
  ordersToFulfill: shop.ordersToFulfill.totalCount,
  skillsOutOfStock: shop.skillsOutOfStock.totalCount,
  sales: shop.salesToday.gross,
  topSkills: shop.skillTopToday.edges.map(edge => edge.node),
  userName: "admin@example.com"
};

storiesOf("Views / HomePage", module)
  .addDecorator(Decorator)
  .add("default", () => <HomePage {...HomePageProps} />)
  .add("loading", () => (
    <HomePage
      {...HomePageProps}
      activities={undefined}
      tasks={undefined}
      ordersToCapture={undefined}
      ordersToFulfill={undefined}
      skillsOutOfStock={undefined}
      sales={undefined}
      topSkills={undefined}
      userName={undefined}
    />
  ))
  .add("no data", () => (
    <HomePage {...HomePageProps} topSkills={[]} activities={[]} />
  ));
