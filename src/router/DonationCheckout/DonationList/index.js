import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';

import { Divider, IconButton, Row, Text, } from 'components/common';

import {
  DonationTotalContainer,
  DonationListItem,
  DonationListItemAmountContainer,
  DonationRemoveAction,
  DonationDescriptionContainer,
} from './styles';

class DonationList extends Component {
  state = {
    editing: false,
  };

  onSetEditing = value => this.setState(() => ({ editing: value, }));

  render() {
    const { editing, } = this.state;
    const { total, purposes, removePurpose, } = this.props;

    return (
      <Fragment>
        <div>
          <DonationTotalContainer>
            <Text weight={'bold'} size={'large'}>
              TOTAL: ${total}
            </Text>
          </DonationTotalContainer>
        </div>
        <div>
          {purposes.sort((a, b) => b.priority - a.priority).map(purpose => (
            <Fragment key={purpose.id}>
              <DonationListItem>
                <Row
                  left={
                    <DonationDescriptionContainer
                      active={editing === purpose.id}
                    >
                      <DonationRemoveAction active={editing === purpose.id}>
                        <IconButton
                          name={'remove'}
                          size={'xSmall'}
                          color={'transparent'}
                          onClick={() => removePurpose(purpose)}
                        />
                      </DonationRemoveAction>
                      <Text color={'grey1'} value={purpose && purpose.name} />
                    </DonationDescriptionContainer>
                  }
                  right={
                    <Row
                      left={
                        <DonationListItemAmountContainer>
                          <Text color={'grey1'}>${purpose.amount}</Text>
                        </DonationListItemAmountContainer>
                      }
                      right={
                        editing === purpose.id ? (
                          <IconButton
                            name={'confirm-edit'}
                            size={'xSmall'}
                            color={'transparent'}
                            onClick={() => this.onSetEditing()}
                          />
                        ) : (
                          <IconButton
                            name={'edit'}
                            size={'xSmall'}
                            color={'transparent'}
                            onClick={() => this.onSetEditing(purpose.id)}
                          />
                        )
                      }
                    />
                  }
                />
              </DonationListItem>
              <Divider />
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

DonationList.propTypes = {
  total: PropTypes.string,
  purposes: PropTypes.array,
  removePurpose: PropTypes.func,
};

DonationList.defaultProps = {
  total: undefined,
  purposes: undefined,
  removePurpose: undefined,
};

export default DonationList;
