self.addEventListener('fetch', event => {
  if (event.request.method !== 'POST') {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith((async () => {
    const formData = await event.request.formData();
    const title = formData.get('title') || '';
    const attachment = formData.get('attachment');
    const content = formData.get('content');
    console.log('title, content, attachment ', title, content, attachment);
    return new Response('title, content, attachment ' + title);
  })());
});