import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

import css from './EditListingAddonForm.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export const EditListingAddonFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const rulesLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.rulesLabel',
      });
      const rulesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.rulesPlaceholder',
      });

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.updateFailed" />
        </p>
      ) : null;
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;


      const columns = [{
        dataField: 'obligatory',
        text: 'Obligatory Info',
        editor: {
          type: Type.SELECT,
          options: [{
            value: 'obligatory',
            label: 'obligatory'
          }, {
            value: 'non-obligatory',
            label: 'non-obligatory'
          }
          ]
        }
      }, 
      {
        dataField: 'name',
        text: 'Product Name'
      },{
        dataField: 'price',
        text: 'Product Price',
        validator: (newValue, row, column) => {
          if (isNaN(newValue)) {
            return {
              valid: false,
              message: 'Price should be numeric'
            };
          }
          
          return true;
        }
      }, {
        dataField: 'unit',
        text: 'Unit of Charge',
        editor: {
          type: Type.SELECT,
          options: [{
            value: 'per booking',
            label: 'per booking'
          }, {
            value: 'per week',
            label: 'per week'
          }, {
            value: 'per day',
            label: 'per day'
          }, {
            value: 'per booking person',
            label: 'per booking person'
          }, {
            value: 'per day person',
            label: 'per day person'
          }, {
            value: 'per week person',
            label: 'per week person'
          },
          ]
        }
      }
      ];

      const sample = [
        { 'obligatory': 'obligatory', 'name':"Skipper",'price': 1000, 'unit': "per week" },
        { 'obligatory': 'obligatory', 'name':"audio system",'price': 0, 'unit': "per booking" },
        { 'obligatory': 'non-obligatory','name':"hostess", 'price': 1000, 'unit': "per day" },
        { 'obligatory': 'obligatory', 'name':"Lunch/dinner",'price': 100, 'unit': "per day" }
      ];

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          {/* <FieldTextInput
            id="rules"
            name="rules"
            className={css.policy}
            type="textarea"
            label={rulesLabelMessage}
            placeholder={rulesPlaceholderMessage}
          /> */}

          <BootstrapTable
            keyField="id"
            data={sample}
            columns={columns}
            cellEdit={cellEditFactory({ mode: 'click' , blurToSave: true })}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingAddonFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingAddonFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingAddonFormComponent);
