import { Formik, ErrorMessage, Field, Form } from 'formik';
import { HelpSchema } from 'schemas/helpSchema';
// import { useDispatch } from 'react-redux';

const initialValues = {
  name: '',
  email: '',
};

const NeedHelpForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Email:', evt.target.elements.email.value);
    console.log('Comment:', evt.target.elements.comment.value);
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={HelpSchema} onSubmit={handleSubmit}>
      {({ errors, touched, submitCount  }) => (
          <Form autoComplete="off">
            <Field
              type="email"
              name="email"
              placeholder="Email address"
              style={{
                width: 300,
                height: 49,
              }}/>
            <ErrorMessage name="email" />
            {/* <input
          autoComplete="off"
          type="text"
          name="comment"
          placeholder="Comment"
        ></input> */}
            <div>
            <Field
                component="textarea"
                name="comment"
                placeholder="Comment"
                style={{
                  width: 300,
                  height: 120,
                  resize: 'none',
                }}
                />
              <ErrorMessage name="comment" />
              {submitCount > 0 && errors.comment && (!touched.comment || touched.comment) && (
                <div>Please enter a comment</div>
              )}

            </div>
            <button type="submit">Send</button>
          </Form>
)}
      </Formik>
    </div>
  );
};

export default NeedHelpForm;