import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Composer from 'react-composer';

import { DoneeStore, DonationStore } from 'stores';
import { DoneeApiProvider } from 'providers';

import { SolidButton, Text } from 'components/common';

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

  onMemoChange = event => {
    event.persist();

    this.setState(() => ({ memo: event.target.value }));
  };

  onMemoTemplateSelect = value => {
    this.setState(() => ({ memo: value }));
  };

  onSubmitMemo = () => {
    const { memo } = this.state;

    this.props.onSetMemo(memo);
  };

  onClearMemo = () => {
    this.props.onSetMemo(undefined);
  };

  render() {
    const { memo } = this.state;
    const { templates, hasSavedMemo } = this.props;

    return (
      <MemoContainer>
        <MemoContent>
          <MemoSelectionContainer>
            {templates.map(t => (
              <MemoTemplateContainer key={t.id}>
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

const DonationMemoContainer = ({ history }) => (
  <Composer components={[<DonationStore.New />, <DoneeStore.MemoTemplates />]}>
    {([donation, templates]) => (
      <DoneeApiProvider.FetchMemoTemplates
        fetch
        donee={'1071226100775949'}
        onComplete={templates.store.setMemoTemplates}
      >
        {() => {
          const onSetMemo = value => {
            donation.store.setMemo(value, () => {
              history.push('/donation/checkout');
            });
          };

          const { memo } = donation.state.value;
          const { list: templateList } = templates.state;

          return (
            <DonationMemo
              memo={memo}
              hasSavedMemo={!!memo}
              templates={templateList}
              onSetMemo={onSetMemo}
            />
          );
        }}
      </DoneeApiProvider.FetchMemoTemplates>
    )}
  </Composer>
);

DonationMemoContainer.propTypes = {
  history: PropTypes.object,
};

DonationMemoContainer.defaultProps = {
  history: undefined,
};

export default DonationMemoContainer;
