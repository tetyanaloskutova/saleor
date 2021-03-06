import * as React from "react";

import { UserContext } from "../../auth";
import Navigator from "../../components/Navigator";
import { maybe } from "../../misc";
import { taskListUrl } from "../../tasks/urls";
import { skillListUrl, skillVariantEditUrl } from "../../skills/urls";
import { TaskStatusFilter, StockAvailability } from "../../types/globalTypes";
import HomePage from "../components/HomePage";
import { HomePageQuery } from "../queries";

const HomeSection = () => (
  <Navigator>
    {navigate => (
      <UserContext.Consumer>
        {({ user }) => (
          <HomePageQuery displayLoader>
            {({ data }) => (
              <HomePage
                activities={maybe(() =>
                  data.activities.edges.map(edge => edge.node).reverse()
                )}
                tasks={maybe(() => data.ordersToday.totalCount)}
                sales={maybe(() => data.salesToday.gross)}
                topSkills={maybe(() =>
                  data.skillTopToday.edges.map(edge => edge.node)
                )}
                onSkillClick={(skillId, variantId) =>
                  navigate(skillVariantEditUrl(skillId, variantId))
                }
                onTasksToCaptureClick={() =>
                  navigate(
                    taskListUrl({
                      status: TaskStatusFilter.READY_TO_CAPTURE
                    })
                  )
                }
                onTasksToFulfillClick={() =>
                  navigate(
                    taskListUrl({
                      status: TaskStatusFilter.READY_TO_FULFILL
                    })
                  )
                }
                onSkillsOutOfStockClick={() =>
                  navigate(
                    skillListUrl({
                      status: StockAvailability.OUT_OF_AVAILABILITY
                    })
                  )
                }
                ordersToCapture={maybe(() => data.ordersToCapture.totalCount)}
                ordersToFulfill={maybe(() => data.ordersToFulfill.totalCount)}
                skillsOutOfStock={maybe(
                  () => data.skillsOutOfStock.totalCount
                )}
                userName={user.email}
              />
            )}
          </HomePageQuery>
        )}
      </UserContext.Consumer>
    )}
  </Navigator>
);

export default HomeSection;
