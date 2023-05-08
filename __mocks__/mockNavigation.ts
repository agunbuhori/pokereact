import { StackNavigationState } from '@react-navigation/native';

export function createMockNavigation(): NavigationContainerRef<any> {
  return {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    setParams: jest.fn(),
    setOptions: jest.fn(),
    isReady: jest.fn(() => true),
    canGoBack: jest.fn(),
    dangerouslyGetState: jest.fn(() => ({ index: 0, routes: [] } as StackNavigationState)),
    dangerouslyGetParent: jest.fn(),
    dangerouslyGetChildren: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
}