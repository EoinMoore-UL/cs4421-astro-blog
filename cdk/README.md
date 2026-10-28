# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   type-check the project
* `npm run watch`   watch for changes and type-check
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Static site HTTPS

The static site is served through CloudFront, which provides HTTPS on its
default domain. HTTP requests are redirected to HTTPS so Godot web exports
run in the secure context they require. After deploying `StaticSiteStack`,
use its `SiteUrl` stack output to open the site over HTTPS.

If you use a custom domain, configure that domain and an ACM certificate in
`us-east-1` on the CloudFront distribution.
