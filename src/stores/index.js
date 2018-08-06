import DoneeStore from './Donee';
import DonorStore from './Donor';
import DonationStore from './Donation';

export { default as DoneeStore, } from './Donee';
export { default as DonorStore, } from './Donor';
export { default as DonationStore, } from './Donation';

export const stores = [
  ...DoneeStore.stores,
  ...DonorStore.stores,
  ...DonationStore.stores,
];
