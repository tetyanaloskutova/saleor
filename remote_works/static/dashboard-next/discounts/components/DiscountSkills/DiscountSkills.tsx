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
import { ListProps } from "../../../types";
import { SaleDetails_sale } from "../../types/SaleDetails";
import { VoucherDetails_voucher } from "../../types/VoucherDetails";

export interface SaleSkillsProps extends ListProps {
  discount: SaleDetails_sale | VoucherDetails_voucher;
  onSkillAssign: () => void;
  onSkillUnassign: (id: string) => void;
}

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
    textRight: {
      textAlign: "right"
    },
    wideColumn: {
      width: "40%"
    }
  });
const DiscountSkills = withStyles(styles, {
  name: "DiscountSkills"
})(
  ({
    discount: sale,
    classes,
    disabled,
    pageInfo,
    onRowClick,
    onPreviousPage,
    onSkillAssign,
    onSkillUnassign,
    onNextPage
  }: SaleSkillsProps & WithStyles<typeof styles>) => (
    <Card>
      <CardTitle
        title={i18n.t("Skills assigned to {{ saleName }}", {
          saleName: maybe(() => sale.name)
        })}
        toolbar={
          <Button variant="flat" color="secondary" onClick={onSkillAssign}>
            {i18n.t("Assign skills")}
          </Button>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.wideColumn}>
              {i18n.t("Skill name")}
            </TableCell>
            <TableCell className={classes.textRight}>
              {i18n.t("Skill Type")}
            </TableCell>
            <TableCell className={classes.textRight}>
              {i18n.t("Published")}
            </TableCell>
            <TableCell />
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
            maybe(() => sale.skills.edges.map(edge => edge.node)),
            skill => (
              <TableRow
                hover={!!skill}
                key={skill ? skill.id : "skeleton"}
                onClick={skill && onRowClick(skill.id)}
                className={classes.tableRow}
              >
                <TableCellAvatar
                  thumbnail={maybe(() => skill.thumbnail.url)}
                />
                <TableCell>
                  {maybe<React.ReactNode>(() => skill.name, <Skeleton />)}
                </TableCell>
                <TableCell className={classes.textRight}>
                  {maybe<React.ReactNode>(
                    () => skill.skillType.name,
                    <Skeleton />
                  )}
                </TableCell>
                <TableCell className={classes.textRight}>
                  {skill && skill.isPublished !== undefined ? (
                    <StatusLabel
                      label={
                        skill.isPublished
                          ? i18n.t("Published", { context: "skill status" })
                          : i18n.t("Not published", {
                              context: "skill status"
                            })
                      }
                      status={skill.isPublished ? "success" : "error"}
                    />
                  ) : (
                    <Skeleton />
                  )}
                </TableCell>
                <TableCell className={classes.iconCell}>
                  <IconButton
                    disabled={!skill || disabled}
                    onClick={event => {
                      event.stopPropagation();
                      onSkillUnassign(skill.id);
                    }}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
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
    </Card>
  )
);
DiscountSkills.displayName = "DiscountSkills";
export default DiscountSkills;
