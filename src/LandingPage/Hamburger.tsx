import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';

function Hamburger() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Accounts" position="right">
        {/* Drawer content */}
      </Drawer>
      <Burger lineSize={2} size="lg" opened={opened} onClick={open} aria-label="Toggle navigation" color='white' />

    
    </>
  );
}
export default Hamburger;