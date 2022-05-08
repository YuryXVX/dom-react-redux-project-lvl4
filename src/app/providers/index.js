import { withRouter } from "./with-router.js"
import { withStore } from "./with-store.js";
import { compose } from '../shared/helpers/utils/compose.js';

export const withProviders = compose(withStore, withRouter);