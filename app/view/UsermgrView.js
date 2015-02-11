/*
 * File: app/view/UsermgrView.js
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

Ext.define('app.view.UsermgrView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.UsermgrView',

    requires: [
        'app.view.UsermgrViewViewModel',
        'app.view.PagingToolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'usermgrview'
    },
    itemId: 'usermgr',
    title: '用户管理',
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: '添加用户',
                    listeners: {
                        click: 'onButtonClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            autoScroll: true,
            title: '用户列表',
            autoLoad: true,
            sortableColumns: false,
            store: 'StoreUser',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: '70%',
                    dataIndex: 'name',
                    text: '用户名'
                },
                {
                    xtype: 'actioncolumn',
                    width: '20%',
                    text: '操作',
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var updateWin = new Ext.create('app.view.UserAddWindow');
                                updateWin.setUser(record.getData());
                                updateWin.show();
                            },
                            altText: '编辑',
                            icon: 'image/edit.gif',
                            tooltip: '编辑'
                        },
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var user = record.data;
                                var confirm = {
                                    title: "确认删除",
                                    msg: "请确认是否删除这个用户",
                                    closable: false,
                                    buttons: Ext.MessageBox.YESNO,
                                    icon: Ext.MessageBox.WARNING,
                                    fn: function(btn) {
                                        if (btn == "yes") {
                                            Ext.Ajax.request({
                                                url: '../user/remove',
                                                success: function(data, a1, a2) {
                                                    view.getStore().load();
                                                    var result = Ext.decode(data.responseText);
                                                    if (result.success) {
                                                        Ext.Msg.alert('成功', '删除成功');
                                                    }
                                                },
                                                failure: function(data) {
                                                    Ext.Msg.alert('失败', "删除失败");
                                                },
                                                jsonData: {
                                                    id: this.user.id
                                                },
                                                scope: {
                                                    user: this.user,
                                                    view: this.view
                                                }
                                            });
                                        }
                                    },
                                    scope: {
                                        user: user,
                                        view: view
                                    },
                                };
                                Ext.MessageBox.show(confirm, this);
                            },
                            icon: 'image/delete.gif',
                            tooltip: '删除'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    store: 'StoreUser'
                }
            ]
        }
    ],

    onButtonClick: function(button, e, eOpts) {
        var addWin = new Ext.create('app.view.UserAddWindow');
        addWin.show();
    }

});