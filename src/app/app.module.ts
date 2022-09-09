import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultChildLevel2Component } from './default-parent/default-child-level-2/default-child-level-2.component';
import { DefaultChildLevel1Component } from './default-parent/default-child-level1/default-child-level1.component';
import { DefaultGranchildOnpushLevel1Component } from './default-parent/default-child-level1/default-granchild-onpush-level1/default-granchild-onpush-level1.component';
import { GrandchildOfGranchildOnPushComponent } from './default-parent/default-child-level1/default-granchild-onpush-level1/grandchild-of-granchild-on-push/grandchild-of-granchild-on-push.component';
import { DefaultGrandchildLevel1Component } from './default-parent/default-child-level1/default-grandchild-level1/default-grandchild-level1.component';
import { DefaultParentComponent } from './default-parent/default-parent.component';
import { DetectionSourceService } from './detection-source.service';

@NgModule({
  declarations: [	
    AppComponent,
      DefaultParentComponent,
      DefaultChildLevel1Component,
      DefaultChildLevel2Component,
      DefaultGranchildOnpushLevel1Component,
      DefaultGrandchildLevel1Component,
      GrandchildOfGranchildOnPushComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DetectionSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
