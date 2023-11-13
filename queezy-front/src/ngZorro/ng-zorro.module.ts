import { registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import pt from '@angular/common/locales/pt';
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n";
import { NzTableComponent, NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(pt);
@NgModule({
    imports:[
        NzButtonModule,
        NzTableModule,
        NzDropDownModule,
        NzDividerModule,
        NzIconModule
    ],
    exports: [
        NzButtonComponent,
        NzTableComponent,
        NzDropdownMenuComponent,
        NzDividerComponent

    ],
    providers: [
        { provide: NZ_I18N, useValue: pt_BR }
      ],
})
export class NgZorroModule {}