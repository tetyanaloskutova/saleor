import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
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
import DeleteIcon from "@material-ui/icons/Delete";
import * as React from "react";

import CardTitle from "../../../components/CardTitle";
import Skeleton from "../../../components/Skeleton";
import StatusLabel from "../../../components/StatusLabel";
import TableCellAvatar from "../../../components/TableCellAvatar";
import TablePagination from "../../../components/TablePagination";
import i18n from "../../../i18n";
import { maybe, renderCollection } from "../../../misc";
import { PageListProps } from "../../../types";
import { CollectionDetails_collection } from "../../types/CollectionDetails";

const styles = (theme: Theme) =>
  createStyles({
    iconCell: {
      "&:last-child": {
        paddingRight: 0
      },
      width: 48 + theme.spacing.unit / 2
    },
    tableRow: {
      cursor: "pointer"
    },
    textCenter: {
      textAlign: "center"
    }
  });

export interface CollectionSkillsProps
  extends PageListProps,
    WithStyles<typeof styles> {
  collection: CollectionDetails_collection;
  onSkillUnassign: (id: string, event: React.MouseEvent<any>) => void;
}

const CollectionSkills = withStyles(styles, { name: "CollectionSkills" })(
  ({
    classes,
    collection,
    disabled,
    onAdd,
    onNextPage,
    onPreviousPage,
    onSkillUnassign,
    onRowClick,
    pageInfo
  }: CollectionSkillsProps) => (
    <Card>
      <CardTitle
        title={
          !!collection ? (
            i18n.t("Skills in {{ collectionName }}", {
              collectionName: collection.name
            })
          ) : (
            <Skeleton />
          )
        }
        toolbar={
          <Button
            disabled={disabled}
            variant="text"
            color="secondary"
            onClick={onAdd}
          >
            {i18n.t("Assign skill", {
              context: "button"
            })}
          </Button>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{i18n.t("Name", { context: "table header" })}</TableCell>
            <TableCell className={classes.textCenter}>
              {i18n.t("Type", { context: "table header" })}
            </TableCell>
            <TableCell>
              {i18n.t("Published", { context: "table header" })}
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={5}
              hasNextPage={maybe(() => pageInfo.hasNextPage)}
              onNextPage={onNextPage}
              hasPreviousPage={maybe(() => pageInfo.hasPreviousPage)}
              onPreviousPage={onPreviousPage}
            />
          </TableRow>
        </TableFooter>
        <TableBody>
          {renderCollection(
            maybe(() => collection.skills.edges.map(edge => edge.node)),
            skill => (
              <TableRow
                className={classes.tableRow}
                hover={!!skill}
                onClick={!!skill ? onRowClick(skill.id) : undefined}
                key={skill ? skill.id : "skeleton"}
              >
                <TableCellAvatar
                  thumbnail={maybe(() => skill.thumbnail.url)}
                />
                <TableCell>
                  {maybe<React.ReactNode>(() => skill.name, <Skeleton />)}
                </TableCell>
                <TableCell className={classes.textCenter}>
                  {maybe<React.ReactNode>(
                    () => skill.skillType.name,
                    <Skeleton />
                  )}
                </TableCell>
                <TableCell>
                  {maybe(
                    () => (
                      <StatusLabel
                        label={
                          skill.isPublished
                            ? i18n.t("Published")
                            : i18n.t("Not published")
                        }
                        status={skill.isPublished ? "success" : "error"}
                      />
                    ),
                    <Skeleton />
                  )}
                </TableCell>
                <TableCell className={classes.iconCell}>
                  <IconButton
                    disabled={!skill}
                    onClick={event => onSkillUnassign(skill.id, event)}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ),
            () => (
              <TableRow>
                <TableCell />
                <TableCell colSpan={5}>{i18n.t("No skills found")}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Card>
  )
);
CollectionSkills.displayName = "CollectionSkills";
export default CollectionSkills;
