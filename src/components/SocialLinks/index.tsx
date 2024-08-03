import React from 'react';
import { Box, Flex } from '../../coreComponents';
import { SocialIcon } from 'react-social-icons';
const SOCIAL_LINKS = [
  {
    network: 'email',
    url: 'mailto:alexmakondev@gmail.com',
  },
  {
    network: 'telegram',
    url: 'https://t.me/alexmakon',
  },
  {
    network: 'github',
    url: 'https://github.com/AlekseiMakonovitskii',
  },
];
function SocialLinks() {
  return (
    <Box>
      <Flex gap={2}>
        {SOCIAL_LINKS.map(({ network, url }) => (
          <SocialIcon
            network={network}
            url={url}
            style={{ height: 40, width: 40 }}
            target="_blank"
            key={network}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default React.memo(SocialLinks);
