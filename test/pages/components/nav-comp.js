class NavComponent {
  get linksNavMenu() {
    return $$('#primary-menu li[id*=menu]');
  }

  get firstNavMenuList() {
    return $('#primary-menu li');
  }
}

export default new NavComponent();