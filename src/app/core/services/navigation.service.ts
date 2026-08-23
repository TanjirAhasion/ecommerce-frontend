import { Injectable } from '@angular/core';
import { MAIN_NAV, TOP_BAR_MESSAGES } from '../constants/navigation.config';
import { NavItem, TopBarMessage } from '../models/navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  /**
   * Reading nav data from config rather than owning it here means a future
   * multi-tenant/multi-vertical setup can inject a different config
   * (e.g. loaded from the API per store) without changing this service's
   * consumers (HeaderComponent, MegaMenuComponent, mobile drawer, footer).
   */
  getMainNav(): NavItem[] {
    return MAIN_NAV;
  }

  getTopBarMessages(): TopBarMessage[] {
    return TOP_BAR_MESSAGES;
  }
}
