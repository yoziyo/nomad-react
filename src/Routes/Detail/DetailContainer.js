import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class DetailContainer extends React.Component {
  state = {
    result: '',
    error: null,
    loading: true,
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
