import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {
  TUI_SANITIZER, TuiLinkModule, TuiModeModule, TuiRootModule, TuiSvgModule, TuiThemeNightModule,
} from "@taiga-ui/core";
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  TuiAppBarModule, TuiAvatarModule, TuiButtonModule,
  TuiCardModule,
  TuiHeaderModule, TuiIconModule,
  TuiSurfaceModule,
  TuiTitleModule
} from "@taiga-ui/experimental";
import {GameComponent} from "./components/game/game.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiThemeNightModule,
    TuiModeModule,
    TuiRootModule,
    TuiAppBarModule,
    TuiCardModule,
    TuiSurfaceModule,
    TuiHeaderModule,
    TuiTitleModule,
    TuiAvatarModule,
    TuiButtonModule,
    GameComponent,
    TuiIconModule,
    TuiSvgModule,
    TuiLinkModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'portfolio';
}
