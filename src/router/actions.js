export const getFormValues = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  return values;
};
