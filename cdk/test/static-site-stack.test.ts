import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { StaticSiteStack } from '../lib/static-site-stack';

test('CloudFront redirects HTTP viewers to HTTPS and outputs the site URL', () => {
  const app = new cdk.App();
  const stack = new StaticSiteStack(app, 'StaticSiteStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::CloudFront::Distribution', {
    DistributionConfig: {
      DefaultCacheBehavior: {
        ViewerProtocolPolicy: 'redirect-to-https',
      },
    },
  });
  template.hasOutput('SiteUrl', { Value: Match.anyValue() });
});
