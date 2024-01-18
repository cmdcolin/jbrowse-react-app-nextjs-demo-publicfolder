# jbrowse-react-app-nextjs

Demo of using public folder in nextjs for serving static files

## How it works

I created a runtime variable called `NEXT_PUBLIC_BASE_PATH` in .env and
.env.development that refers to the "sub-URI" that the app is deployed to. E.g.
for https://jbrowse.org/demos/app-nextjs it is deployed to a sub-URI of
/demos/app-nextjs. If you don't use a "sub-URI"/base path, you can leave this
blank

Then that NEXT_PUBLIC_BASE_PATH env variable is used in next.config.js to
properly put it into action as the basePath.

Then, I use UriLocation/uri and not localPath/LocalPathLocation in the JBrowse
config. LocalPath is referring to files accessed on hard disk in electron app,
and doesn't work for web. Little confusing terminology I know, but you can use
UriLocations anywhere, and they can be relative or absolute uri/url.

In this demo I made it so at dev time with "yarn dev" it deploys to
/demos/testing and at prod time to /demos/app-nextjs

You can then see in
https://github.com/cmdcolin/jbrowse-react-app-nextjs-demo-publicfolder/blob/main/app/config.ts
that this is prefixed to all the paths. This is sort of annoyingly a lot of
work, but the sub-URI doesn't have a trailing slash, so the "normal" relative
URL resolution that would otherwise happen inside JBrowse does not include the
proper sub-URI

## Alternative approaches

Alternatives to this approach could include hosting static files on a different
server than nextjs like amazon s3 bucket or apache server or something like
this.

The external server thing is actually required if using something like Django
because the default server for Django doesn't support range requests. Looks like
Next.js server does support HTTP Range requests though.

With an external server, you may run into CORS errors since it has to request
across hosts. To fix, you can either

- Reverse proxy it so that it all looks like it is served from the same host
  (bypass CORS)

- Allow CORS on your server (google how to allow CORS on apache, nginx, or other
  amazon s3, etc)

In any case, this public folder system might work fine

## Hope that helps!

Let me know if there are issues
