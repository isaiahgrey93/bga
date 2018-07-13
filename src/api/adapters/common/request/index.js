// LegacyAdapter (/src/api/adapters/common/request/legacy.js)
// dependency is not included in git due to private methods
// temp until api proxy for legacy API is implemented, then
// this will be removed from app
import LegacyAdapter from './legacy';

const RequestAdapter = {
  Legacy: LegacyAdapter,
};

export default RequestAdapter;
