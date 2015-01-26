/*
 * File: app/view/LoginView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.view.LoginView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.LoginView',

    requires: [
        'app.view.LoginViewViewModel',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'loginview'
    },
    layout: 'fit',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'panel',
            title: 'DNS管理系统',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    itemId: 'loginForm',
                    width: 305,
                    bodyPadding: 10,
                    title: '登录',
                    url: '../user/login',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '用户名',
                            name: 'userName',
                            allowBlank: false,
                            emptyText: 'userName'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '密码',
                            name: 'password',
                            inputType: 'password',
                            allowBlank: false,
                            emptyText: 'password'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    text: '登录',
                                    listeners: {
                                        click: 'onButtonClick'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    onButtonClick: function(button, e, eOpts) {
        var me = this,

            form = me.down('form#loginForm'),
            valid = form.isValid();

        if(!valid){
             return false;
        }

        form.submit({
            waitMsg: '正在登录',
            success: function (form, action) {
                Ext.Msg.alert('成功', '登录成功');
            },
            failure: function (form, action) {
                //Ext.Msg.alert('失败', '保存失败');
                me.destroy();
                Ext.create('app.view.MainView');
            }
        });
    }

});