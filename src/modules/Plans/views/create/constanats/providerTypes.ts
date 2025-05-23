import {
  getVmwareLogo,
  openshiftLogo,
  openstackLogo,
  ovaLogo,
  redhatLogo,
} from 'src/components/images/logos';

const providerTypes = (isDarkTheme: boolean) => ({
  openshift: {
    key: 'openshift',
    logo: openshiftLogo,
    title: 'OpenShift Virtualization',
  },
  openstack: {
    key: 'openstack',
    logo: openstackLogo,
    title: 'OpenStack',
  },
  ova: {
    key: 'ova',
    logo: ovaLogo,
    title: 'Open Virtual Appliance',
  },
  ovirt: {
    key: 'ovirt',
    logo: redhatLogo,
    title: 'Red Hat Virtualization',
  },
  vsphere: {
    key: 'vsphere',
    logo: getVmwareLogo(isDarkTheme),
    title: 'VMware',
  },
});

export default providerTypes;
