import { Component } from '@angular/core';
import { GroupResult, groupBy } from '@progress/kendo-data-query';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-wrapper">
        <kendo-multiselect
            [data]="groupedData"
            [textField]="'name'"
            [valueField]="'name'">
        </kendo-multiselect>
    </div>
  `
})
export class AppComponent {
    public data: Array<any> = [
        { name: 'Pork', category: 'Food', subcategory: 'Meat' },
        { name: 'Pepper', category: 'Food', subcategory: 'Vegetables' },
        { name: 'Beef', category: 'Food', subcategory: 'Meat' }
    ];
    public groupedData: GroupResult[] = groupBy(this.data, [{field: 'subcategory'}]);
}
