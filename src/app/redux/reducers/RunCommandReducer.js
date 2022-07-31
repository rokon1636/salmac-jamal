import {
    RUN_CMD_DATA_INIT,
    RUN_CMD_DATA,
    RUN_CMD_DATA_RESET,
    RUN_CMD_DATA_ERROR,
    RUN_UPLOAD_FILE_DATA_INIT,
    RUN_UPLOAD_FILE_DATA,
    RRUN_UPLOAD_FILE_DATA_ERROR,
    RUN_UPLOAD_FILE_DATA_RESET
} from '../actions/RunCommandActions'

const initialState = {
    commandResponse:null,
    fileUploadResponse:null,
    loading:false,
}

const RunCommandReducer = function (state = initialState, action) {
    switch (action.type) {
        case RUN_CMD_DATA_INIT: {
            return {
                ...state,
                commandResponse: null,
                loading:true,
            }
        }
        case RUN_CMD_DATA_ERROR: {
            return {
                ...state,
                commandResponse: {...action.payload},
                loading:false,
            }
        }
        case RUN_CMD_DATA_RESET: {
            return {
                ...state,
                commandResponse: null,
                loading:false,
            }
        }
        case RUN_CMD_DATA: {
            return {
                ...state,
                commandResponse: {...action.payload},
                loading:false,
            }
        }
        case RUN_UPLOAD_FILE_DATA_INIT: {
            return {
                ...state,
                fileUploadResponse: null,
                loading:true,
            }
        }
        case RRUN_UPLOAD_FILE_DATA_ERROR: {
            return {
                ...state,
                fileUploadResponse: {...action.payload},
                loading:false,
            }
        }
        case RUN_UPLOAD_FILE_DATA_RESET: {
            return {
                ...state,
                fileUploadResponse: null,
                loading:false,
            }
        }
        case RUN_UPLOAD_FILE_DATA: {
            return {
                ...state,
                fileUploadResponse: {...action.payload},
            }
        }
     
        default: {
            return {
                ...state,
            }
        }
    }
}

export default RunCommandReducer
