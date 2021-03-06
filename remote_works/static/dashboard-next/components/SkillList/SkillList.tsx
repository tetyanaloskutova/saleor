import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";

import { CategoryDetails_category_skills_edges_node } from "../../categories/types/CategoryDetails";
import TableCellAvatar from "../../components/TableCellAvatar";
import i18n from "../../i18n";
import { maybe, renderCollection } from "../../misc";
import { ListProps } from "../../types";
import Money from "../Money";
import Skeleton from "../Skeleton";
import StatusLabel from "../StatusLabel";
import TablePagination from "../TablePagination";

const styles = (theme: Theme) =>
  createStyles({
    avatarCell: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: 0,
      width: theme.spacing.unit * 5
    },
    link: {
      cursor: "pointer"
    },
    textLeft: {
      textAlign: "left"
    },
    textRight: {
      textAlign: "right"
    }
  });

interface SkillListProps extends ListProps, WithStyles<typeof styles> {
  skills: CategoryDetails_category_skills_edges_node[];
}

export const SkillList = withStyles(styles, { name: "SkillList" })(
  ({
    classes,
    disabled,
    pageInfo,
    onNextPage,
    onPreviousPage,
    onRowClick,
    skills
  }: SkillListProps) => (
    <Table>
      <TableHead>
        <TableRow>
          {(skills === undefined || skills.length > 0) && <TableCell />}
          <TableCell className={classes.textLeft}>
            {i18n.t("Name", { context: "object" })}
          </TableCell>
          <TableCell>{i18n.t("Type", { context: "object" })}</TableCell>
          <TableCell>{i18n.t("Published", { context: "object" })}</TableCell>
          <TableCell className={classes.textRight}>
            {i18n.t("Price", { context: "object" })}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={5}
            hasNextPage={pageInfo && !disabled ? pageInfo.hasNextPage : false}
            onNextPage={onNextPage}
            hasPreviousPage={
              pageInfo && !disabled ? pageInfo.hasPreviousPage : false
            }
            onPreviousPage={onPreviousPage}
          />
        </TableRow>
      </TableFooter>
      <TableBody>
        {renderCollection(
          skills,
          skill => (
            <TableRow
              hover={!!skill}
              key={skill ? skill.id : "skeleton"}
              onClick={skill && onRowClick(skill.id)}
              className={classes.link}
            >
              <TableCellAvatar thumbnail={maybe(() => skill.thumbnail.url)} />
              <TableCell className={classes.textLeft}>
                {skill ? skill.name : <Skeleton />}
              </TableCell>
              <TableCell>
                {skill && skill.skillType ? (
                  skill.skillType.name
                ) : (
                  <Skeleton />
                )}
              </TableCell>
              <TableCell>
                {skill &&
                skill.availability &&
                skill.availability.available !== undefined ? (
                  <StatusLabel
                    label={
                      skill.availability.available
                        ? i18n.t("Published", { context: "skill status" })
                        : i18n.t("Not published", { context: "skill status" })
                    }
                    status={
                      skill.availability.available ? "success" : "error"
                    }
                  />
                ) : (
                  <Skeleton />
                )}
              </TableCell>
              <TableCell className={classes.textRight}>
                {skill &&
                skill.price &&
                skill.price.amount !== undefined &&
                skill.price.currency !== undefined ? (
                  <Money money={skill.price} />
                ) : (
                  <Skeleton />
                )}
              </TableCell>
            </TableRow>
          ),
          () => (
            <TableRow>
              <TableCell colSpan={5}>{i18n.t("No skills found")}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  )
);
SkillList.displayName = "SkillList";
export default SkillList;
