import { Form } from 'antd';
import React,{Component} from 'react';

export  const connectFormWithPreProps = (preProps = {}) => TargetComponent => {

    const FormModifyComponent = Form.create({
        onFieldsChange(props, fields) {
            debugger
            if (props.onFormValuesChange) {
                props.onFormValuesChange(fields);
            }
        },
        mapPropsToFields(props) {
            const { defaultFormValues } = props;
            
            const aa = Object.keys(defaultFormValues).reduce((preValue, key) => {
                return {
                    ...preValue,
                    [key]: Form.createFormField({ ...defaultFormValues[key] })
                };
            }, {});
            debugger
            return aa
        }
    })(TargetComponent);

    class DefaultFormComponent extends Component {
        state = {
            defaultFormValues: {},
            formatFormValues: {}
        };

        onChange = (values = {}, callback) => {
            debugger
            const formatValues = Object.keys(values).reduce((preValue, key) => {
                return {
                    ...preValue,
                    [key]: values[key] && values[key].value
                };
            }, {});

            this.setState((preState) => {
                return {
                    defaultFormValues: {
                        ...preState.defaultFormValues,
                        ...values
                    },
                    formatFormValues: {
                        ...preState.formatFormValues,
                        ...formatValues
                    }
                };
            }, callback);
        };

        render() {
            const config = typeof preProps === 'function' ? preProps(this.props) : preProps;

            return (
                <FormModifyComponent
                    {...config}
                    {...this.props}
                    {...this.state}
                    onFormValuesChange={this.onChange}
                />);
        }
    }

    return DefaultFormComponent;
};