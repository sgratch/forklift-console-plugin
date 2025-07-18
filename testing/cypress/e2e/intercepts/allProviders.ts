export const setupAllProvidersIntercepts = () => {
  cy.intercept('GET', '/api/kubernetes/apis/forklift.konveyor.io/v1beta1/providers?limit=250', {
    statusCode: 200,
    body: {
      apiVersion: 'forklift.konveyor.io/v1beta1',
      kind: 'ProviderList',
      metadata: {
        continue: '',
        resourceVersion: '6470326',
      },
      items: [
        {
          apiVersion: 'forklift.konveyor.io/v1beta1',
          kind: 'Provider',
          metadata: {
            name: 'test-openshift-provider',
            namespace: 'default',
            uid: 'test-openshift-uid-1',
            resourceVersion: '502185',
          },
          spec: {
            secret: {},
            type: 'openshift',
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T14:19:29Z',
                message: 'Connection test, succeeded.',
                reason: 'Tested',
                status: 'True',
                type: 'ConnectionTestSucceeded',
              },
              {
                category: 'Advisory',
                lastTransitionTime: '2025-06-27T14:19:29Z',
                message: 'Validation has been completed.',
                reason: 'Completed',
                status: 'True',
                type: 'Validated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T14:19:32Z',
                message: 'The inventory has been loaded.',
                reason: 'Completed',
                status: 'True',
                type: 'InventoryCreated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T14:19:32Z',
                message: 'The provider is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
            observedGeneration: 1,
            phase: 'Ready',
          },
        },
        {
          apiVersion: 'forklift.konveyor.io/v1beta1',
          kind: 'Provider',
          metadata: {
            name: 'test-vsphere-provider',
            namespace: 'default',
            uid: 'test-vsphere-uid-1',
            resourceVersion: '499322',
          },
          spec: {
            secret: {
              name: 'test-vsphere-secret',
              namespace: 'default',
            },
            settings: {
              sdkEndpoint: 'vcenter',
            },
            type: 'vsphere',
            url: 'https://test-vcenter.example.com/sdk',
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T14:16:13Z',
                message: 'Connection test, succeeded.',
                reason: 'Tested',
                status: 'True',
                type: 'ConnectionTestSucceeded',
              },
              {
                category: 'Advisory',
                lastTransitionTime: '2025-06-27T14:16:13Z',
                message: 'Validation has been completed.',
                reason: 'Completed',
                status: 'True',
                type: 'Validated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T14:16:16Z',
                message: 'The inventory has been loaded.',
                reason: 'Completed',
                status: 'True',
                type: 'InventoryCreated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T14:16:16Z',
                message: 'The provider is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
            fingerprint: '9B:33:C8:10:11:0B:DA:66:9B:9B:E7:0D:CB:E9:8D:A5:A6:DB:E5:93',
            observedGeneration: 1,
            phase: 'Ready',
          },
        },
        {
          apiVersion: 'forklift.konveyor.io/v1beta1',
          kind: 'Provider',
          metadata: {
            name: 'test-host-provider',
            namespace: 'openshift-mtv',
            uid: 'test-host-uid-1',
            resourceVersion: '84002',
          },
          spec: {
            secret: {},
            type: 'openshift',
            url: '',
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T05:33:45Z',
                message: 'Connection test, succeeded.',
                reason: 'Tested',
                status: 'True',
                type: 'ConnectionTestSucceeded',
              },
              {
                category: 'Advisory',
                lastTransitionTime: '2025-06-27T05:33:45Z',
                message: 'Validation has been completed.',
                reason: 'Completed',
                status: 'True',
                type: 'Validated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T05:33:48Z',
                message: 'The inventory has been loaded.',
                reason: 'Completed',
                status: 'True',
                type: 'InventoryCreated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T05:33:48Z',
                message: 'The provider is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
            observedGeneration: 1,
            phase: 'Ready',
          },
        },
        {
          apiVersion: 'forklift.konveyor.io/v1beta1',
          kind: 'Provider',
          metadata: {
            name: 'test-openstack-provider',
            namespace: 'openshift-mtv',
            uid: 'test-openstack-uid-1',
            resourceVersion: '3173201',
          },
          spec: {
            secret: {
              name: 'test-openstack-secret',
              namespace: 'openshift-mtv',
            },
            type: 'openstack',
            url: 'https://test-openstack.example.com:13000/v3',
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2025-06-29T22:15:57Z',
                message: 'Connection test, succeeded.',
                reason: 'Tested',
                status: 'True',
                type: 'ConnectionTestSucceeded',
              },
              {
                category: 'Advisory',
                lastTransitionTime: '2025-06-29T22:15:57Z',
                message: 'Validation has been completed.',
                reason: 'Completed',
                status: 'True',
                type: 'Validated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-29T22:17:17Z',
                message: 'The inventory has been loaded.',
                reason: 'Completed',
                status: 'True',
                type: 'InventoryCreated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-29T22:17:17Z',
                message: 'The provider is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
            observedGeneration: 1,
            phase: 'Ready',
          },
        },
        {
          apiVersion: 'forklift.konveyor.io/v1beta1',
          kind: 'Provider',
          metadata: {
            name: 'test-ovirt-provider',
            namespace: 'openshift-mtv',
            uid: 'test-ovirt-uid-1',
            resourceVersion: '152036',
          },
          spec: {
            secret: {
              name: 'test-ovirt-secret',
              namespace: 'openshift-mtv',
            },
            type: 'ovirt',
            url: 'https://test-ovirt.example.com/ovirt-engine/api',
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T06:59:15Z',
                message: 'Connection test, succeeded.',
                reason: 'Tested',
                status: 'True',
                type: 'ConnectionTestSucceeded',
              },
              {
                category: 'Advisory',
                lastTransitionTime: '2025-06-27T06:59:15Z',
                message: 'Validation has been completed.',
                reason: 'Completed',
                status: 'True',
                type: 'Validated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T06:59:34Z',
                message: 'The inventory has been loaded.',
                reason: 'Completed',
                status: 'True',
                type: 'InventoryCreated',
              },
              {
                category: 'Required',
                lastTransitionTime: '2025-06-27T06:59:34Z',
                message: 'The provider is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
            observedGeneration: 1,
            phase: 'Ready',
          },
        },
      ],
    },
  }).as('getAllProviders');
};
