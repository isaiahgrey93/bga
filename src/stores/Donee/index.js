import Offerings, { store as OfferingsStore, } from './Offerings';
import Profile, { store as ProfileStore, } from './Profile';
import MemoTemplates, { store as MemoTemplatesStore, } from './MemoTemplates';

export default {
  Offerings,
  Profile,
  MemoTemplates,
  stores: [OfferingsStore, ProfileStore, MemoTemplatesStore, ],
};
