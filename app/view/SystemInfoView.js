/*
 * File: app/view/SystemInfoView.js
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

Ext.define('app.view.SystemInfoView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SystemInfoView',

    requires: [
        'app.view.SystemInfoViewViewModel',
        'app.view.TrafficView',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.Display'
    ],

    viewModel: {
        type: 'systeminfoview'
    },
    margin: '',
    title: '系统信息',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'tabpanel',
            margin: 10,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: '系统信息',
                    items: [
                        {
                            xtype: 'form',
                            margin: 10,
                            bodyPadding: 10,
                            title: '系统资源',
                            method: 'get',
                            url: '../system/info',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    fieldLabel: 'CPU使用率',
                                    name: 'cpu',
                                    value: '-'
                                },
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    fieldLabel: '内存',
                                    name: 'memorydisplay',
                                    value: '-'
                                }
                            ]
                        }
                    ],
                    listeners: {
                        beforeactivate: 'onPanelBeforeActivate'
                    }
                },
                {
                    xtype: 'TrafficView'
                }
            ]
        }
    ],

    onPanelBeforeActivate: function(component, eOpts) {
          this.down("form").getForm().load();
    }

});