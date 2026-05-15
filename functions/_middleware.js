export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.infusion-para-dormir.es') {
    url.hostname = 'infusion-para-dormir.es';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
