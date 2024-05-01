import {ChangeDetectionStrategy, Component, input} from "@angular/core";
import {
  TuiAvatarModule, TuiButtonModule,
  TuiCardModule,
  TuiHeaderModule,
  TuiSurfaceModule,
  TuiTitleModule
} from "@taiga-ui/experimental";

@Component({
  standalone: true,
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiCardModule,
    TuiSurfaceModule,
    TuiTitleModule,
    TuiHeaderModule,
    TuiAvatarModule,
    TuiButtonModule
  ]
})
export class GameComponent {
  title = input('');
  subTitle = input('');
  icon = input('tuiIconSmartphone');
  noApk = input(false);
}
