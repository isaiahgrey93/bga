import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { Donee, Donation, } from 'stores';

import { SolidButton, Text, } from 'components/common';

import {
  MemoContainer,
  MemoContent,
  MemoInput,
  MemoSubmitContainer,
  MemoSubmit,
  MemoSelectionContainer,
  MemoTemplateContainer,
  MemoClear,
} from './styles';

class DonationMemo extends Component {
  state = {
    memo: '',
    initialized: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.memo && !!props.memo && !state.initialized) {
      return {
        memo: props.memo,
        initialized: true,
      };
    }

    return {};
  }

  onMemoChange = (event) => {
    event.persist();

    this.setState(() => ({ memo: event.target.value, }));
  };

  onMemoTemplateSelect = (value) => {
    this.setState(() => ({ memo: value, }));
  };

  onSubmitMemo = () => {
    const { memo, } = this.state;

    this.props.onSetMemo(memo);
  };

  onClearMemo = () => {
    this.props.onSetMemo(undefined);
  };

  render() {
    const { memo, } = this.state;
    const { templates, hasSavedMemo, } = this.props;

    return (
      <MemoContainer>
        <MemoContent>
          <MemoSelectionContainer>
            {templates.map(t => (
              <MemoTemplateContainer>
                <SolidButton
                  color={'muted'}
                  size={'small'}
                  onClick={() => this.onMemoTemplateSelect(t.description)}
                >
                  {t.description}...
                </SolidButton>
              </MemoTemplateContainer>
            ))}
          </MemoSelectionContainer>
          <MemoInput
            autoFocus
            onChange={this.onMemoChange}
            placeholder={'Want to add a message to your gift?'}
            value={memo}
          />
          <MemoSubmitContainer>
            <MemoSubmit onClick={this.onSubmitMemo}>Save</MemoSubmit>
            {hasSavedMemo && (
              <MemoClear onClick={this.onClearMemo}>
                <Text size={'small'} color={'grey3'}>
                  Proceed without memo
                </Text>
              </MemoClear>
            )}
          </MemoSubmitContainer>
        </MemoContent>
      </MemoContainer>
    );
  }
}

DonationMemo.propTypes = {
  templates: PropTypes.array.isRequired,
  onSetMemo: PropTypes.func.isRequired,
  hasSavedMemo: PropTypes.bool.isRequired,
};

DonationMemo.defaultProps = {};

const DonationMemoContainer = ({ history, }) => (
  <Composer
    components={[
      <Donation.New />,
      <Donee.MemoTemplates fetch donee={'1071226100775949'} />,
    ]}
  >
    {([donation, templates, ]) => {
      const onSetMemo = (value) => {
        donation.store.setMemo(value, () => {
          history.push('/donation/checkout');
        });
      };

      return (
        <DonationMemo
          memo={donation.state.memo}
          hasSavedMemo={!!donation.state.memo}
          templates={templates.state.list}
          onSetMemo={onSetMemo}
        />
      );
    }}
  </Composer>
);

DonationMemoContainer.propTypes = {
  history: PropTypes.object,
};

DonationMemoContainer.defaultProps = {
  history: undefined,
};

export default DonationMemoContainer;
