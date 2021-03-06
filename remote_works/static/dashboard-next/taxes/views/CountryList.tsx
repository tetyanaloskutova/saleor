import * as React from "react";

import Navigator from "../../components/Navigator";
import { maybe } from "../../misc";
import CountryListPage from "../components/CountryListPage";
import { TypedFetchTaxes, TypedUpdateTaxSettings } from "../mutations";
import { TypedCountryListQuery } from "../queries";
import { countryTaxRatesUrl } from "../urls";

export const CountryList: React.StatelessComponent = () => (
  <Navigator>
    {navigate => (
      <TypedUpdateTaxSettings>
        {(updateTaxSettings, updateTaxSettingsOpts) => (
          <TypedFetchTaxes>
            {(fetchTaxes, fetchTaxesOpts) => (
              <TypedCountryListQuery displayLoader={true}>
                {({ data, loading }) => (
                  <CountryListPage
                    disabled={
                      loading ||
                      fetchTaxesOpts.loading ||
                      updateTaxSettingsOpts.loading
                    }
                    onRowClick={code => navigate(countryTaxRatesUrl(code))}
                    onSubmit={formData =>
                      updateTaxSettings({
                        variables: {
                          input: {
                            chargeTaxesOnDelivery:
                              formData.chargeTaxesOnDelivery,
                            displayGrossPrices: formData.showGross,
                            includeTaxesInPrices: formData.includeTax
                          }
                        }
                      })
                    }
                    onTaxFetch={fetchTaxes}
                    shop={maybe(() => ({
                      ...data.shop,
                      countries: data.shop.countries.filter(
                        country => country.vat
                      )
                    }))}
                  />
                )}
              </TypedCountryListQuery>
            )}
          </TypedFetchTaxes>
        )}
      </TypedUpdateTaxSettings>
    )}
  </Navigator>
);
export default CountryList;
