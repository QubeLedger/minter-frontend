import { useLayoutEffect } from 'react';

import { useState, useEffect, useCallback } from 'react';

export function useForceUpdate() {
        const [, updateComponent] = useState<{}>({});

        return useCallback(() => {
                updateComponent({});
        }, []);
}

export function removeArrayElement<T>(arr: T[], elem: T) {
        const index = arr.indexOf(elem);

        if (index === -1) {
                return;
        }

        arr.splice(index, 1);
}

interface StoreListeningComponentData<T> {
        update: () => void;
        options?: UseStoreStateOptions<T>;
}

export interface UseStoreStateOptions<T> {
        shouldUpdate?: (oldState: T, newState: T) => boolean;
}

export function createStore<T>(defaultValue: T) {
        let storeState = defaultValue;
        const storeListeningComponents: StoreListeningComponentData<T>[] = [];

        function updateStoreState(newStoreState: T) {
                        const oldStoreState = storeState;
                        storeState = newStoreState;
                        storeListeningComponents.forEach(({ update, options }) => {
                        const shouldUpdate =
                                !options ||
                                !options.shouldUpdate ||
                                !options.shouldUpdate(oldStoreState, newStoreState);

                        if (!shouldUpdate) {
                                return;
                        }

                        update();
                });
        }

        function useStoreState(options?: UseStoreStateOptions<T>) {
                const forceUpdate = useForceUpdate();

                useLayoutEffect(() => {
                        const listeningData: StoreListeningComponentData<T> = {
                                options,
                                update: forceUpdate,
                        };

                        storeListeningComponents.push(listeningData);

                        return () => {
                                removeArrayElement(storeListeningComponents, listeningData);
                        };
                });

                return [storeState, updateStoreState] as const;
        }

        return [useStoreState, updateStoreState] as const;
}