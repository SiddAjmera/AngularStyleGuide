import { AppFirebaseModule } from './app-firebase.module';

describe('AppFirebaseModule', () => {
  let appFirebaseModule: AppFirebaseModule;

  beforeEach(() => {
    appFirebaseModule = new AppFirebaseModule();
  });

  it('should create an instance', () => {
    expect(appFirebaseModule).toBeTruthy();
  });
});
