/* Copyright (c) 2021 BlackBerry Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
let initialState = {
  loading: false,
  success: false,
  // isError: false,
  data: '',
  error: '',
};

import {
  GET_LOGGED_DETECTIONS_DEVICE_START,
  GET_LOGGED_DETECTIONS_DEVICE_SUCCESS,
  GET_LOGGED_DETECTIONS_DEVICE_ERROR,
  RESET_LOGGED_DETECTIONS_DEVICE,
} from '../../actions/detections/syslogDetectionsDevice';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGGED_DETECTIONS_DEVICE_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        loading: false,
        success: true,
      });
    case GET_LOGGED_DETECTIONS_DEVICE_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error,
        loading: false,
        isError: true,
      });
    case GET_LOGGED_DETECTIONS_DEVICE_START:
      return Object.assign({}, state, {
        loading: true,
        isError: false,
        error: '',
      });
    case RESET_LOGGED_DETECTIONS_DEVICE:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
