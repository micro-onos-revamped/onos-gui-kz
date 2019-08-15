/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Pipe, PipeTransform} from '@angular/core';
import {ChangeValueType} from './proto/github.com/onosproject/onos-config/pkg/northbound/admin/admin_pb';

@Pipe({
    name: 'changeValue',
    pure: false
})
export class ChangeValuePipe implements PipeTransform {

    transform(value: Uint8Array, valueType: ChangeValueType, valueTypeOpts: Array<number>, maxLen: number = 15): string[] {
        if (value === undefined || value.length === 0) {
            return [''];
        }
        const view1 = new DataView(value.buffer, 0, 8);
        let valueStrings: string[] = [];
        switch (valueType) {
            case ChangeValueType.BOOL:
                valueStrings = [value[0] ? 'true' : 'false'];
                break;
            case ChangeValueType.INT:
                // TODO fix this for Int
                valueStrings = [String(view1.getInt32(0))];
                break;
            case ChangeValueType.UINT:
                // TODO fix this for UInt
                valueStrings = [String(view1.getUint32(0))];
                break;
            case ChangeValueType.FLOAT:
                // TODO fix this for Float
                valueStrings = [String(view1.getFloat32(0))];
                break;
            case ChangeValueType.LEAFLIST_STRING:
                const llStr: string = String.fromCharCode.apply(null, value);
                valueStrings = llStr.split('\n');
                break;
            default:
                valueStrings = [String.fromCharCode.apply(null, value)];
        }
        for (const idx in valueStrings) {
            if (valueStrings[idx].length > maxLen) {
                valueStrings[idx] = valueStrings[idx].substr(0, maxLen).trim() + '...';
            }
        }
        return valueStrings;
    }
}