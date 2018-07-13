import React from 'react';
import ReactDOM from 'react-dom';

import api from 'api';

import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

(async () => {
  const donee = '1071226100775949';

  const profile = await api.donee.profile({ donee });
  const offerings = await api.donee.offerings({ donee });
  const campaigns = await api.donee.campaigns({ donee });
  const defaultOfferings = await api.donee.defaultOfferings({ donee });
  const memoTemplates = await api.donee.memoTemplates({ donee });
  const shareMessage = await api.donee.shareMessage({ donee });

  return {
    profile,
    offerings,
    campaigns,
    defaultOfferings,
    memoTemplates,
    shareMessage,
  };
})();

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
